import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    </Router>
  );
}

export default App;

