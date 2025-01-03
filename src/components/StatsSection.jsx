import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section ref={statsRef} className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={1000} label="Happy Members" isVisible={isVisible} />
          <StatItem value={50} label="Expert Trainers" isVisible={isVisible} />
          <StatItem value={100} label="Fitness Classes" isVisible={isVisible} />
          <StatItem value={10} label="Years of Experience" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, isVisible }) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-purple-500 mb-2">
        {isVisible && (
          <CountUp end={value} duration={2.5} />
        )}
        {!isVisible && '0'}
      </h3>
      <p className="text-white">{label}</p>
    </div>
  );
};

export default StatsSection;

