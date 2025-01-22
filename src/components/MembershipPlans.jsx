import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Plan',
    premiumLabel: '✨ Starter',
    price: '₹1800',
    duration: '1 Month',
    features: ['Access to gym equipment', 'Locker room access', 'Free weights area'],
    color: 'bg-white', // White background
    textColor: 'text-gray-900', // Dark text color for visibility on white
  },
  {
    name: 'Quarterly Plan',
    premiumLabel: '🏆 Silver',
    price: '₹3800',
    duration: '3 Months',
    features: ['All Monthly features', 'Group fitness classes'],
    color: 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500', // Lighter silver
    textColor: 'text-gray-900', // Dark text for contrast
  },
  {
    name: 'Termly Plan',
    premiumLabel: '🥉 Bronze',
    price: '₹5500',
    duration: '6 Months',
    features: ['All Quarterly features', 'Personal trainer (2 sessions/month)'],
    color: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-700', // Lighter bronze
    textColor: 'text-white', // White text for contrast on bronze
  },
  {
    name: 'Annual Plan',
    premiumLabel: '👑 Golden',
    price: '₹8000',
    duration: '12 Months',
    features: ['All Termly features', 'Unlimited personal training', 'Nutrition consultation'],
    color: 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700', // Brighter gold
    textColor: 'text-white', // White text for contrast on gold
  },
];

function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (index) => {
    setSelectedPlan(index);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-white animate-hover">Explore Membership Plans</h2>
        <div className="relative flex flex-wrap justify-center items-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedPlan(index)}
              onMouseLeave={() => setSelectedPlan(null)}
              onClick={() => handlePlanClick(index)}
              className={`relative transition-all duration-300 transform ${
                selectedPlan === index ? 'scale-105 z-10 shadow-2xl' : 'scale-95 opacity-90'
              } ${plan.color} w-72 rounded-lg p-6 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl hover:opacity-100 hover:ring-2 hover:ring-white hover:ring-opacity-60`}
            >
              {selectedPlan === index && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-lg font-bold py-1 px-3 rounded-full shadow-md">
                  {plan.premiumLabel}
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 text-center ${plan.textColor}`}>{plan.name}</h3>
              <p className={`text-4xl font-bold mb-6 text-center ${plan.textColor}`}>
                {plan.price} <span className="text-sm text-gray-200">/{plan.duration}</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`mb-2 flex items-center ${plan.textColor}`}>
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
