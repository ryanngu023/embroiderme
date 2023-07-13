import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import FAQ from './pages/faq.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
