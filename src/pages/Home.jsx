import React from 'react';
import Hero from '../components/Hero';
import ClassSlider from '../components/ClassSlider';
import MembershipPlans from '../components/MembershipPlans';
import About from './About';
// import StatsSection from '../components/StatsSection';

function Home() {
  return (
    <div>
      <Hero />
      <ClassSlider />
      <About />
      {/* <StatsSection /> */}
      <MembershipPlans />
    </div>
  );
}

export default Home;

