import React from 'react';
import {About,Features} from './HeroSections'
import Stat from './StatPage'
import Pricing from '../../components/Pricing';
import PartnersPage from './PartnersPage';
import Review from './ReviewPage';

function Home() {
  return (
    <>
      <About/> 
      <Stat/>
      <Features/>
      <Pricing/>
      <PartnersPage/>
      <Review/>
    </>
  );
}

export default Home;