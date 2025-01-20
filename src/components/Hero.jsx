import React, { useState } from 'react';
import { Button } from './ui/button';
import heroImage from '../assets/Gymbgimage.jpg'; // From pankaj: hero image updated
import MemberRegistration from './MemberRegistration';

function Hero() {
  // State to control the visibility of the registration modal
  const [showModal, setShowModal] = useState(false);

  // Handler to open the registration modal
  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  // Handler to close the registration modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative h-screen flex items-center bg-gradient-to-b from-gray-900 to-purple-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fitness model"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
      </div>
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-pulse">
            Transform Your Body,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
              Transform Your Life
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 animate-fadeIn">
            Join FitForge and start your fitness journey today!
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded animate-bounce"
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
        </div>
        {/* Registration modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-30">
            <div className="bg-gray-800 p-6 rounded-lg w-11/12 md:w-1/3 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-2xl font-bold text-purple-400 hover:text-purple-300"
                style={{ zIndex: 9999 }}
              >
                X
              </button>
              <MemberRegistration />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
