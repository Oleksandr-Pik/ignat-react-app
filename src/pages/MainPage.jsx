import React from 'react';
import Hero from '../components/Hero/Hero';
import BigWarm from '../components/BigWarm/BigWarm';
import HotProducts from '../components/HotProducts/HotProducts';
import Subscribe from '../components/Subscribe/Subscribe';
import Reviews from '../components/Reviews/Reviews';

const MainPage = () => {
  return (
    <main>
      <Hero/>
      <BigWarm />
      <HotProducts />
      <Subscribe />
      <Reviews />
    </main>
  );
};

export default MainPage;
