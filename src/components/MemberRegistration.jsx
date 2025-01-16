import { useState } from 'react';
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
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/GYM/Gym_Management/src/components/htdocs/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.status === 'success') {
        setMessage('Registration successful!');
        setFormData({ name: '', email: '', phone: '', dob: '' });
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Become a Member</h2>
        {message && (
          <p className="text-center mb-4 text-green-500">{message}</p>
        )}
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

