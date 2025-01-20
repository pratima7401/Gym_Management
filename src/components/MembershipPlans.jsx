import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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
<<<<<<< HEAD
=======
  const [startIndex, setStartIndex] = useState(0);
  const [visiblePlans, setVisiblePlans] = useState(1);
  const totalPlans = plans.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisiblePlans(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePlans(2);
      } else {
        setVisiblePlans(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalPlans);
    }, 1000); // Change slide every 1 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalPlans);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalPlans) % totalPlans);
  };

>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Membership Plans</h2>
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
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
=======
        <div className="relative">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Previous plans"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Next plans"
          >
            <ChevronRight size={24} />
          </button>
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visiblePlans)}%)` }}
            >
              {[...plans, ...plans].map((plan, index) => (
                <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
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
>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;