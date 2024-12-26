import React from 'react';
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/lable'

function MemberRegistration() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Become a Member</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" placeholder="John Doe" className="bg-gray-700" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="john@example.com" className="bg-gray-700" />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input type="tel" id="phone" placeholder="(123) 456-7890" className="bg-gray-700" />
          </div>
          <div className="mb-4">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input type="date" id="dob" className="bg-gray-700" />
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

