import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTab from './CategoryTab';
import PopularToy from './PopularToy';
import Recommend from './Recommend';
import useTitle from "../../hooks/useTitle";
import NewsletterSubscription from './NewsletterSubscription';
import Review from './Review';

const Home = () => {
  useTitle('Home');
  return (
    <div className="my-container">
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <Recommend></Recommend>
      <PopularToy></PopularToy>
      <Review></Review>
      <NewsletterSubscription></NewsletterSubscription>
    </div>
  );
};

export default Home;