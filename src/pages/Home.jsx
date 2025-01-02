import React from 'react';
import Hero from '../components/Hero';
import ClassSlider from '../components/ClassSlider';
import MembershipPlans from '../components/MembershipPlans';
import About from '../pages/About';
import Contact from '../pages/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <ClassSlider />
      <About/>
      <MembershipPlans />
      <Contact />
    </div>
  );
}

export default Home;

