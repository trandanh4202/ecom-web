import React, { useEffect, useState } from 'react';

import Banner from './HomeSection/Banner/Banner';
import CountUp from './HomeSection/CountUp/CountUp';
import Highlight from './HomeSection/Highlight/Highlight';
import News from './HomeSection/News/News';
import Product from './HomeSection/Product/Product';
import Sales from './HomeSection/Sales/Sales';
import Slider from './HomeSection/Slider/Slider';

//

const Home = () => {
  return (
    <>
      <Banner />
      <CountUp />
      <Highlight />
      <News />
      <Product />
      <Sales />
      <Slider />
    </>
  );
};

export default Home;
