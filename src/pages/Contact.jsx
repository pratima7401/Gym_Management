import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/lable';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="your@email.com" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default Contact;

