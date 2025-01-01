// Array of class data
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import YogaImage from "../assets/yoga.jpg";
import ZumbaImage from "../assets/zumba.jpg";
import PilatesImage from "../assets/pilates.jpg";
import SpinningImage from "../assets/spinning.jpg";
import BoxingImage from "../assets/boxing.jpg";
import CrossFitImage from "../assets/crossfit.jpg";

const classes = [
  {
    name: "Yoga",
    description: "Improves flexibility, strength, and mental well-being.",
    image: YogaImage,
  },
  {
    name: "Zumba",
    description:
      "A fun way to burn calories and improve cardiovascular health.",
    image: ZumbaImage,
  },
  {
    name: "Pilates",
    description: "Enhances core strength, posture, and muscle control.",
    image: PilatesImage,
  },
  {
    name: "Spinning",
    description: "Boosts endurance and burns calories through intense cycling.",
    image: SpinningImage,
  },
  {
    name: "Boxing",
    description: "Builds strength, coordination, and relieves stress.",
    image: BoxingImage,
  },
  {
    name: "CrossFit",
    description: "Combines strength and conditioning for overall fitness.",
    image: CrossFitImage,
  },
];

function ClassSlider() {
  // State to keep track of the first visible class
  const [startIndex, setStartIndex] = useState(0);
  const visibleClasses = 4;

  // Handler for next slide button
  const nextSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + 1) % (classes.length - visibleClasses + 1)
    );
  };

  // Handler for previous slide button
  const prevSlide = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + (classes.length - visibleClasses + 1)) %
        (classes.length - visibleClasses + 1)
    );
  };

  return (
    <section className="py-16 bg-black-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Our Classes
        </h2>
        <div className="relative">
          {/* Previous slide button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Previous classes"
          >
            <ChevronLeft size={24} />
          </button>
          {/* Next slide button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
            aria-label="Next classes"
          >
            <ChevronRight size={24} />
          </button>
          <div className="overflow-hidden">
            {/* Slider container */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${startIndex * 25}%)` }}
            >
              {/* Render class cards */}
              {classes.map((cls, index) => (
                <div key={index} className="flex-none w-1/4 px-2">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay with class details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-xl font-bold">{cls.name}</p>
                      <p className="text-white text-sm mt-2">
                        {cls.description}
                      </p>
                    </div>
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

export default ClassSlider;

