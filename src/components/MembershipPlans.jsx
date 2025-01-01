// Array of membership plan data
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29.99',
    features: ['Access to gym equipment', 'Locker room access', 'Free weights area'],
  },
  {
    name: 'Premium',
    price: '$49.99',
    features: ['All Basic features', 'Group fitness classes', 'Personal trainer (1 session/month)'],
  },
  {
    name: 'Elite',
    price: '$79.99',
    features: ['All Premium features', 'Unlimited personal training', 'Nutrition consultation'],
  },
  {
    name: 'Student',
    price: '$19.99',
    features: ['Access to gym equipment', 'Locker room access', 'Discounted group classes'],
  },
  {
    name: 'Family',
    price: '$99.99',
    features: ['Access for up to 4 family members', 'All Premium features', 'Childcare services'],
  },
  {
    name: 'Corporate',
    price: '$59.99',
    features: ['All Premium features', 'Team building sessions', 'Workplace wellness programs'],
  },
];

function MembershipPlans() {
  // State to keep track of the first visible plan
  const [startIndex, setStartIndex] = useState(0);
  const visiblePlans = 3;

  // Handler for next slide button
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 1) % (plans.length - visiblePlans + 1)
    );
  };

  // Handler for previous slide button
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - 1 + (plans.length - visiblePlans + 1)) % 
      (plans.length - visiblePlans + 1)
    );
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Membership Plans</h2>
        <div className="relative">
          {/* Previous slide button */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Previous plans"
          >
            <ChevronLeft size={24} />
          </button>
          {/* Next slide button */}
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Next plans"
          >
            <ChevronRight size={24} />
          </button>
          <div className="overflow-hidden">
            {/* Slider container */}
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visiblePlans)}%)` }}
            >
              {/* Render plan cards */}
              {plans.map((plan, index) => (
                <div key={index} className="flex-none w-1/3 px-4">
                  <div className="bg-gray-800 rounded-lg p-8 shadow-lg h-full flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                    <p className="text-4xl font-bold mb-6 text-purple-400">{plan.price}<span className="text-sm text-gray-400">/month</span></p>
                    <ul className="mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2 flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;

