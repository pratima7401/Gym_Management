import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemberRegistration from './components/MemberRegistration';
import MembershipPlans from './components/MembershipPlans';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <MemberRegistration />
      <MembershipPlans />
      <Footer />
    </div>
  );
}

export default App;

