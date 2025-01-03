import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Award, Clock, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';
import facilities from '../assets/facilities.jpg';
import zumbaVideo from '../assets/zumba.mp4';
import strengthVideo from '../assets/vd1.mp4';
import yogaVideo from '../assets/yoga.mp4';
import pilatesVideo from '../assets/pilates.mp4';
import cardioVideo from '../assets/cardio.mp4';
import crossFitVideo from '../assets/crossfit.mp4';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stats = [
  { icon: <Dumbbell className="w-8 h-8 text-purple-500" />, value: 10, suffix: '+', label: 'Years of Experience' },
  { icon: <Users className="w-8 h-8 text-purple-500" />, value: 25, suffix: '+', label: 'Certified Trainers' },
  { icon: <Award className="w-8 h-8 text-purple-500" />, value: 1000, suffix: '+', label: 'Happy Members' },
  { icon: <Clock className="w-8 h-8 text-purple-500" />, value: 24, suffix: '/7', label: 'Gym Access' },
];

const activities = [
  { name: 'Zumba Workout', video: zumbaVideo },
  { name: 'Strength Training', video: strengthVideo },
  { name: 'Yoga Classes', video: yogaVideo },
  { name: 'Pilates Classes', video: pilatesVideo },
  { name: 'CrossFit Classes', video: crossFitVideo },
  { name: 'Cardio Classes', video: cardioVideo },
];

function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-900 opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-center"
            {...fadeIn}
          >
            About FitForge
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            {...fadeIn}
          >
            Empowering individuals to forge their best selves through fitness, community, and expert guidance.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-400">
                  <CountUp 
                    end={stat.value} 
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Commitment to Your Fitness Journey</h2>
              <p className="text-gray-300">
                FitForge has been a leading name in fitness for over 10 years, committed to providing the highest standard of fitness and wellness services. With a team of 25+ certified trainers, each bringing their own expertise in areas like strength training, cardio, yoga, and rehabilitation, we ensure personalized guidance for every member.
              </p>
              <p className="text-gray-300">
                Our trainers are passionate about helping you reach your goals, whether you're aiming to lose weight, build muscle, or improve overall health. We understand that each individual's fitness journey is unique, and we're here to support you every step of the way.
              </p>
              <p className="text-gray-300">
                In addition to our expert trainers, we offer tailored nutrition plans created by certified nutritionists, designed to complement your fitness regimen and fuel your progress. We understand the importance of balanced nutrition in achieving fitness goals, which is why our nutrition programs are customized to suit each individual's needs.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={facilities}
                alt="Gym facilities" 
                className="rounded-lg shadow-2xl"
              />
              {/* <div className="absolute -bottom-4 -left-7 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">State-of-the-art Equipment</p>
                <p className="text-sm">Cutting-edge technology for optimal workouts</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gym Activities Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Gym Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <video 
                  className="w-full h-48 object-cover"
                  src={activity.video}
                  autoPlay 
                  loop 
                  muted 
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                  <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8">Join the FitForge community today and begin transforming your body, your mindset, and your life.</p>
          <motion.a 
            href="#" 
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.a>
        </div>
      </section> */}
    </div>
  );
}

export default About;

