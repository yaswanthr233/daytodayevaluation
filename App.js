import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import AiAssistant from './pages/AiAssistant';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-trip" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;