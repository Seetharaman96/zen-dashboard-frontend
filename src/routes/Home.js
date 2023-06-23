import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import HomeDetails from '../components/HomeDetails';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg heading="ZenClass Dashboard" text="Hello all, welcome to zenclass dashboard" />
        <HomeDetails />
    </div>
  )
}

export default Home