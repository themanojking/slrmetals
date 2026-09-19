import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import Kittles from "./Pages/ProductPages/Kittles";
import Kinam from "./Pages/ProductPages/Kinam";
import Kuttam from "./Pages/ProductPages/Kuttam";
import Valli from "./Pages/ProductPages/Valli";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/Terms&CConditionsPages/PrivacyPolicy";
import ReturnPolicy from "./Pages/Terms&CConditionsPages/ReturnPolicy";
import ShippingPolicy from "./Pages/Terms&CConditionsPages/ShippingPolicy";
import TermsAndConditions from "./Pages/Terms&CConditionsPages/TermsConditions";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/kittles" element={<Kittles />}></Route>
            <Route path="/kinam" element={<Kinam />}></Route>
            <Route path="/kuttam" element={<Kuttam />}></Route>
            <Route path="/valli" element={<Valli />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/return-policy" element={<ReturnPolicy />}></Route>
            <Route path="/shipping-policy" element={<ShippingPolicy />}></Route>
            <Route
              path="/terms-conditions"
              element={<TermsAndConditions />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
