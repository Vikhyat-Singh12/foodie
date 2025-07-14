import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Contact from './components/Contact'
import PricingPlans from './components/PricingPlan'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingPlans />} />
      </Routes>
      <Footer />
      <Toaster/>
    </Router>
  )
}

export default App