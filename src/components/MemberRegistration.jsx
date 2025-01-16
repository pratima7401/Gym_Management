import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/lable'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

function MemberRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    joinDate: '',
    gender: '',
    planId: '',
  });
  const [status, setStatus] = useState('');
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('http://localhost/api.php?action=getMembershipPlans');
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching membership plans:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post('http://localhost/api.php', {
        type: 'register',
        ...formData
      });

      if (response.data.status === 'success') {
        setStatus('Registration successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          dob: '',
          joinDate: '',
          gender: '',
          planId: '',
        });
      } else {
        setStatus(`Registration failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
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
          <div className="mb-4">
            <Label htmlFor="joinDate">Joining Date</Label>
            <Input 
              type="date" 
              id="joinDate" 
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              className="bg-gray-700" 
              required
            />
          </div>
          <div className="mb-4">
            <Label>Gender</Label>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
              className="flex space-x-4"
            >
              <div className="flex items-center">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="ml-2">Male</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="ml-2">Female</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="ml-2">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="mb-4">
            <Label htmlFor="planId">Membership Plan</Label>
            <Select
              name="planId"
              value={formData.planId}
              onValueChange={(value) => handleSelectChange('planId', value)}
            >
              <SelectTrigger className="bg-gray-700">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id.toString()}>
                    {plan.name} - ${plan.price} / {plan.duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Register
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </div>
    </section>
  );
}

export default MemberRegistration;

