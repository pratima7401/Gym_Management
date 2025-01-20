<<<<<<< HEAD
// import React, { useState, useRef, useEffect } from 'react';
// import { Button } from './ui/button'
// import { Input } from './ui/input'
// import { Label } from './ui/lable'
// import CountUp from 'react-countup';
// import { API_BASE_URL } from '../config';

// function MemberRegistration() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     dob: '',
//   });
//   const [isVisible, setIsVisible] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     try {
//       const response = await fetch(`${API_BASE_URL}/members/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setFormData({ name: '', email: '', phone: '', dob: '' });
//         setSuccess('Registration successful!');
//       } else {
//         const errorMessage = data.message || data.error || JSON.stringify(data);
//         setError(`Registration failed: ${errorMessage}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-800" ref={containerRef}>
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-white">Become a Member</h2>
//         {isVisible && (
//           <div className="text-center mb-8">
//             <p className="text-4xl font-bold text-purple-500">
//               <CountUp end={1000} duration={2.5} suffix="+" /> 
//             </p>
//             <p className="text-xl text-gray-300">Happy Members</p>
//           </div>
//         )}
//         <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//           {error && <div className="mb-4 text-red-500">{error}</div>}
//           {success && <div className="mb-4 text-green-500">{success}</div>}
//           <div className="mb-4">
//             <Label htmlFor="name">Full Name</Label>
//             <Input 
//               type="text" 
//               id="name" 
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe" 
//               className="bg-gray-700" 
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="email">Email</Label>
//             <Input 
//               type="email" 
//               id="email" 
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="john@example.com" 
//               className="bg-gray-700" 
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="phone">Phone</Label>
//             <Input 
//               type="tel" 
//               id="phone" 
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="(123) 456-7890" 
//               className="bg-gray-700" 
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="dob">Date of Birth</Label>
//             <Input 
//               type="date" 
//               id="dob" 
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="bg-gray-700" 
//               required
//             />
//           </div>
//           <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
//             Register
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default MemberRegistration;

import React, { useState, useRef, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/lable'
import CountUp from 'react-countup';
import { API_BASE_URL } from '../config';

function MemberRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
=======
>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch(`${API_BASE_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', dob: '' });
        setSuccess('Registration successful!');
      } else {
        const errorMessage = data.error ? JSON.stringify(data.error) : 'An unknown error occurred';
        setError(`Registration failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in localStorage
    localStorage.setItem('memberRegistration', JSON.stringify(formData));
    // You can add additional logic here, such as sending the data to a server
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', phone: '', dob: '' });
>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b
  };

  return (
    <section className="py-16 bg-gray-800" ref={containerRef}>
      <div className="container mx-auto">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Become a Member</h2>
        {isVisible && (
          <div className="text-center mb-8">
            <p className="text-4xl font-bold text-purple-500">
              <CountUp end={1000} duration={2.5} suffix="+" /> 
            </p>
            <p className="text-xl text-gray-300">Happy Members</p>
          </div>
        )}
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && <div className="mb-4 text-green-500">{success}</div>}
=======
        <h2 className="text-3xl font-bold mb-8 text-center">Become a Member</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
>>>>>>> 5f26fae295e4a7be015db3b0f7d374a500d4c81b
          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className="bg-gray-700" 
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="bg-gray-700" 
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890" 
              className="bg-gray-700" 
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input 
              type="date" 
              id="dob" 
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="bg-gray-700" 
              required
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Register
          </Button>
        </form>
      </div>
    </section>
  );
}

export default MemberRegistration;