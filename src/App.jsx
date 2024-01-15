// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

const App = () => {
  return (
    <Router>
      <div id='FullPage'>
        <nav>
          <Link  to="/" className="logo">Kalvium 💔</Link>
          <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/contacts">Registration Form</Link>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
