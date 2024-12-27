import React from 'react';
import zumbaVideo from '../assets/zumba.mp4';  // Import zumba video
import strengthVideo from '../assets/vd1.mp4'; // Import strenght video
import yogaVideo from '../assets/yoga.mp4';  // Import yoga video
import pilateVideo from '../assets/pilates.mp4'; //Import pilates video
import cardioVideo from '../assets/cardio.mp4';//cardio
import crossFitVideo from '../assets/crossfit.mp4'; //crossfit

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About FitForge</h1>
      <p className="text-lg mb-4">
      FitForge has been a leading name in fitness for over 10 years, committed to providing the highest standard of fitness and wellness services.With a team of 25+ certified trainers,<br/> each bringing their own expertise in areas like strength training, cardio, yoga, and rehabilitation, we ensure personalized guidance for every member. Our trainers are passionate about helping you reach your goals, whether you're aiming to lose weight, build muscle, or improve overall health.
      </p>
      <p className="text-lg mb-4">
      In addition to our expert trainers, we offer tailored nutrition plans created by certified nutritionists, designed to complement your fitness regimen and fuel your progress. <br/>We understand the importance of balanced nutrition in achieving fitness goals, which is why our nutrition programs are customized to suit each individual’s needs.
      </p>
      <p className="text-lg mb-8">
      Join the FitForge community today and begin transforming your body, your mindset, and your life. Together, we’ll forge the best version of you.
      </p>

      {/* Gym Activities Videos */}
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Gym Activities</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cardio Workout */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Zumba Workout</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={zumbaVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>

        {/* Strength Training */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Strength Training</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={strengthVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>

        {/* Yoga Classes */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Yoga Classes</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={yogaVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>
        {/* Pilates Classes */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Pilated Classes</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={pilateVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>
        {/* CrossFit */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">CrossFit Classes</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={crossFitVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>
        {/* Cardio */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Cardio Classes</h3>
          <video 
            className="w-full h-64 object-cover mb-2"
            src={cardioVideo}  // Use the imported video
            autoPlay 
            loop 
            muted 
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default About;
