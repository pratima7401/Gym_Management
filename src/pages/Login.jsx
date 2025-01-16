import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Button} from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/lable';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous error

    try {
      // Send request only for admin login
      const response = await axios.post('http://localhost/React/Projects/gym_app/src/components/htdocs/api.php', {
        type: 'admin_login', // Only use 'admin_login' for the API request
        username,
        password,
      }); 
      console.log('Request payload:', { type: 'admin_login', username, password }); // Debug payload
      console.log('Login response:', response.data); // Debug response

      if (response.data.status === 'success') {
        localStorage.setItem('adminToken', response.data.token); // Store admin token
        navigate('/admin/dashboard'); // Redirect to admin dashboard
      } else {
        setError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Admin Login
        </h1>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-gray-700 text-white"
            />
          </div>
          <div className="mb-6 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-700 text-white pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 font-semibold py-3 px-2 rounded-lg shadow-md hover:shadow-lg transition-all">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
