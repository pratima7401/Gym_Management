import  { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/lable';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost/React/Projects/gym_app/src/components/htdocs/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (data.status === 'success') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Send Message
        </Button>
        {status && <p className="mt-2 text-center">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;

