// Import necessary dependencies and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Plans from './pages/Plans';
import Trainers from './pages/Trainers';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

// Main App component
function App() {
  return (
    <Router>
      {/* Wrap the entire app in a dark-themed container */}
      <div className="App bg-gray-900 text-white min-h-screen">
        {/* Use the Layout component to provide consistent structure */}
        <Layout>
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

