import React from 'react';
import Carousel from 'react-grid-carousel';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Monthly Plan',
    price: '₹2000',
    duration: '1 month',
    features: [
      'Full gym access',
      'Locker room access',
      'Free weights area',
      '2 group fitness classes/month',
    ],
  },
  {
    name: 'Quarterly Plan',
    price: '₹3500',
    duration: '3 months',
    savings: 'Save ₹2500',
    features: [
      'All Monthly Plan features',
      'Unlimited group fitness classes',
      '1 personal training session',
      'Nutrition consultation',
    ],
  },
  {
    name: 'Termly Plan',
    price: '₹6000',
    duration: '6 months',
    savings: 'Save ₹6000',
    features: [
      'All Quarterly Plan features',
      '3 personal training sessions',
      'Access to premium equipment',
      'Sauna and spa access',
    ],
  },
  {
    name: 'Annual Plan',
    price: '₹10000',
    duration: '12 months',
    savings: 'Save ₹14000',
    features: [
      'All Termly Plan features',
      '6 personal training sessions',
      'Free guest passes (2/month)',
      'Priority class booking',
    ],
  },
];

function MembershipPlans() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Membership Plans</h2>
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          loop
          responsiveLayout={[
            { breakpoint: 1024, cols: 2 },
            { breakpoint: 640, cols: 1 },
          ]}
          mobileBreakpoint={640}
          autoplay={3000}
        >
          {plans.map((plan, index) => (
            <Carousel.Item key={index}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.duration}</p>
                <p className="text-3xl font-bold mb-2 text-purple-400">{plan.price}</p>
                {plan.savings && (
                  <p className="text-sm font-semibold text-green-400 mb-4">{plan.savings}</p>
                )}
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-start text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Choose Plan
                </Button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default MembershipPlans;
