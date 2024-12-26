import React from 'react';
import { Button } from './ui/button';
import gymImage from '../assets/Gym_bg.jpg'
import gymVideo from '../assets/vd_main.mp4'; 

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* <img
          src={gymImage}
          alt="Gym Home"
          className="w-full h-full object-cover opacity-50"
        /> */}
        <video
          src={gymVideo} // Specify the video source here
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
        <p className="text-xl mb-8">Join FitForge and start your fitness journey today!</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;

