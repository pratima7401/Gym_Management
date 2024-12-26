import React from 'react';
import { Button } from './ui/button';

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
];

function MembershipPlans() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;

