import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Layout component
import Header from './components/Header'; // Header component
import Footer from './components/Footer'; // Footer component
import MemberRegistration from './components/MemberRegistration'; // Member Registration component
import Home from './pages/Home'; // Home page component
import Classes from './pages/Classes'; // Classes page component
import Plans from './pages/Plans'; // Plans page component
import About from './pages/About'; // About page component
import Contact from './pages/Contact'; // Contact page component
import './App.css'; // Global styles

function App() {
  return (
    <Router> {/* Router should wrap the entire app to handle navigation */}
      <Layout> {/* Apply Layout inside Router */}
        <div className="App bg-gray-900 text-white min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<MemberRegistration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
