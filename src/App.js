import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import CartProvider from './CartContext';
import CartPage from './CartPage';

function App() {
  return (
       <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
