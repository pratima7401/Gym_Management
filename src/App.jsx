<<<<<<< HEAD
import React from 'react';
=======
// import React from 'react';
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import MemberRegistration from './components/MemberRegistration';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Plans from './pages/Plans';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
<<<<<<< HEAD
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <div className="App bg-gray-900 text-white min-h-screen flex flex-col">
          {/* <Header /> */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<MemberRegistration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact" element={<Login />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Layout>
=======
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Set up Axios defaults
axios.defaults.baseURL = 'http://localhost';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/classes" element={<Layout><Classes /></Layout>} />
          <Route path="/plans" element={<Layout><Plans /></Layout>} />
          <Route path="/trainers" element={<Layout><Trainers /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
    </Router>
  );
}

export default App;

