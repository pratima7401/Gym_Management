import React from 'react';
import Hero from '../components/Hero';
import ClassSlider from '../components/ClassSlider';
import MembershipPlans from '../components/MembershipPlans';
import About from './About';


function Home() {
  return (
    <div>
      <Hero />
      <ClassSlider />
      <About />
  
      <MembershipPlans />
    </div>
  );
}

export default Home;

