import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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
import AuthForm from './AuthForm';
import LogSign from './profile/LogSign';
import ProductDetails from './ProductDetails';
import Profile from './profile/Profile';
import BbrandInsider from './profile/BbrandInsider';
import ContactUs from './profile/ContactUs';
import Orders from './profile/Orders';
import Wishlist from './profile/Wishlist';
import CouponsPage from './profile/Coupons';
import GiftCart from './profile/GiftCart';
import BbrandCredit from './profile/BbrandCredit';
import { GiftCards, GiftCardPage } from './profile/GiftCards';
import SavedAddresses from './profile/SavedAddresses';
import SavedCards from './profile/SavedCards';
import SavedVPA from './profile/SavedVPA';
import Welcome from './profile/Welcome';
import BBRAND from './profile/BBRAND';
import { WishlistProvider } from './WishlistContext';
import Categories from './Categories';
import PlaceOrder from './PlaceOrder';
import PaymentDetails from './PaymentDetails';
import PaymentOption from './payment/PaymentOption';
import UpiForm from './payment/UpiForm';
import CardForm from './payment/CardForm';
import PaymentApp from './payment/PaymentApp';
import AdminDashboard from './admin/AdminDashboard';
import AddressProvider from './AddressContext';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AddressProvider>
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
              <Route path="/auth" element={<AuthForm />} />
              <Route path="/product/:productId" element={<ProductDetailsWrapper />} />

              {/* 👤 Profile and Auth-Related Routes */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/logsign" element={<LogSign />} />
              <Route path="/coupons" element={<CouponsPage />} />

              {/* 📦 Account Features */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/payment" element={<PaymentOption />} />
              <Route path="/payment/upi" element={<UpiForm />} />
              <Route path="/payment/card" element={<CardForm />} />
              <Route path="/payment/app" element={<PaymentApp />} />
              <Route path="/giftcards" element={<GiftCardPage />} />
              <Route path="/savedaddresses" element={<SavedAddresses />} />
              <Route path="/savedcards" element={<SavedCards />} />
              <Route path="/savedvpa" element={<SavedVPA />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/bbrand-insider" element={<BbrandInsider />} />
              <Route path="/bbrand" element={<BBRAND />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/paymentdetails" element={<PaymentDetails />} />
              <Route path="/giftcart" element={<GiftCart />} />
              <Route path="/brandcredit" element={<BbrandCredit />} />
            </Routes>
            <Footer />
          </Router>
        </AddressProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

// Wrapper for dynamic route
const ProductDetailsWrapper = () => {
  const { productId } = useParams();
  return <ProductDetails productId={productId} />;
};

export default App;
