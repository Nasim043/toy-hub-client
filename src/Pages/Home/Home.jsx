import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTab from './CategoryTab';
import PopularToy from './PopularToy';
import Recommend from './Recommend';

const Home = () => {
  return (
    <div className="my-container">
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <Recommend></Recommend>
      <PopularToy></PopularToy>
    </div>
  );
};

export default Home;