import React from 'react';
import Hero from '../components/Hero';
import ClassSlider from '../components/Classslider';
import MembershipPlans from '../components/MembershipPlans';

function Home() {
  return (
    <div>
      <Hero />
      <ClassSlider />
      <MembershipPlans />
    </div>
  );
}

export default Home;
