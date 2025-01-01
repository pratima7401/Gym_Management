import React,{useState} from 'react';
import { Button } from './ui/button';
import heroImage from '../assets/back.jpg';
import MemberRegistration from './MemberRegistration'; // Ensure this is imported

function Hero() {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Toggle the modal
  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fitness model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Join FitForge and start your fitness journey today!
          </p>
          <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGetStartedClick}
        >
          Get Started
        </Button>
        </div>
         {/* Modal for Member Registration */}
        {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-transparent p-0 rounded-lg w-11/12 md:w-1/3 relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl font-bold text-purple-600 hover:text-purple-700"
              style={{ zIndex: 9999 }}
            >
              X
            </button>
            {/* MemberRegistration Form */}
            <MemberRegistration />
          </div>
        </div>
      )}
    </div>
      </div>

  );
}

export default Hero;




// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import gymVideo from '../assets/vd_main.mp4';
// import MemberRegistration from './MemberRegistration'; // Ensure this is imported

// function Hero() {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   // Toggle the modal
//   const handleGetStartedClick = () => {
//     setShowModal(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="relative h-screen flex items-center justify-center">
//       <div className="absolute inset-0 z-0">
//         <video
//           src={gymVideo} // Specify the video source here
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover opacity-50"
//         />
//       </div>
//       <div className="relative z-10 text-center">
//         <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
//         <p className="text-xl mb-8">Join FitForge and start your fitness journey today!</p>
//         <Button
//           size="lg"
//           className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleGetStartedClick}
//         >
//           Get Started
//         </Button>
//       </div>

//       {/* Modal for Member Registration */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-30">
//           <div className="bg-transparent p-0 rounded-lg w-11/12 md:w-1/3 relative">
//             {/* Close button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-2xl font-bold text-purple-600 hover:text-purple-700"
//               style={{ zIndex: 9999 }}
//             >
//               X
//             </button>
//             {/* MemberRegistration Form */}
//             <MemberRegistration />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }