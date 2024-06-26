import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';


import { db, collection, getDocs } from '../firebase'; // Adjust the path as needed

// import db from './firebase'
function Home() {

  useEffect(() => {
    const fetchData = async () => {
      const moviesCollection = collection(db, 'movies');
      const snapshot = await getDocs(moviesCollection);
      const moviesList = snapshot.docs.map(doc => doc.data());
      console.log(moviesList);
    };

    fetchData();
  }, []);
   
  return (

      <Container >
<ImgSlider />
<Viewers/>
<Movies />
      </Container>
  
  )
}

export default Home

const Container = styled.main`
min-height : calc (100vh - 70px);
padding : 0 calc(3.5vw + 5px);
overflow-x: hidden;
&:before {
  background: url("Disney Clone Challenge/images/home-background.png");
  content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
}
`