import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import FAQ from './pages/faq.js';

function App() {
  return (
    <div>
      {/* NavBar
          Header if needed */}
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
