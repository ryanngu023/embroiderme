import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import FAQ from './pages/faq.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import SizeGuide from "./pages/sizeguide.js";
import Shop from "./pages/shop.js";
import Contact from "./pages/contact.js";

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
          <Route path="sizeguide" element={<SizeGuide />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
