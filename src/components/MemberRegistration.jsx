import React, { useState } from 'react';
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/lable'

function MemberRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in localStorage
    localStorage.setItem('memberRegistration', JSON.stringify(formData));
    // You can add additional logic here, such as sending the data to a server
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', phone: '', dob: '' });
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Become a Member</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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

