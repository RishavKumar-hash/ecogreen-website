import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutSection from "./components/AboutSection";
import WhyChooseSection from "./components/WhyChooseSection";
import Enquiry from "./components/Enquiry"; // ✅ fixed name

import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import Cancellation from "./pages/Cancellation";

function HomePage() {
  return (
    <>
      <AboutSection />
      <WhyChooseSection />
      <Enquiry />
    </>
  );
}

function App() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/cancellation" element={<Cancellation />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
