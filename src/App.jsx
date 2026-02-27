import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import { ThemeProvider } from './ThemeContext';

// Pages
import Dashboard from './pages/Dashboard';
import ProductList from './pages/Products/ProductList';
import ThermalMonitoring from './pages/Products/Categories/ThermalMonitoring';
import ElectrifiedHeating from './pages/Products/Categories/ElectrifiedHeating';
import HeavyDutyCable from './pages/Products/Categories/HeavyDutyCable';
import TemperatureGauge from './pages/Products/Categories/TemperatureGauge';
import Industries from './pages/Industries';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-brand-accent transition-all duration-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white uppercase tracking-tighter leading-[1.1]">
            Ready to optimize your thermal processes?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Consult with our engineering team for custom sensor design, NABL traceable calibration, and industrial thermal audits.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-sm sm:text-lg hover:bg-slate-100 transition-all shadow-2xl transform hover:scale-105 active:scale-95">
            Contact Technical Support
          </button>
        </div>
      </section>
    </>
  );
}

function AppContent() {
  return (
    <div className="bg-brand-deep min-h-screen selection:bg-brand-accent selection:text-white transition-colors duration-500">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/categories/thermal-monitoring" element={<ThermalMonitoring />} />
          <Route path="/products/categories/electrified-heating" element={<ElectrifiedHeating />} />
          <Route path="/products/categories/heavy-duty-cable" element={<HeavyDutyCable />} />
          <Route path="/products/categories/temperature-gauge" element={<TemperatureGauge />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Catch-all route to home or 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="py-24 border-t border-white/5 bg-brand-deep transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-start">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-500 text-white font-black text-xl">
                  U
                </div>
                <span className="text-2xl font-black text-main tracking-tighter">
                  UNITECH<span className="text-brand-accent italic">.</span>
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-sm">
                Founded in 2014 we have developed a reputation in our sector, with all our customers in different Industrial Sector, for excellence in product innovation, quality and reliability for service and delivery.
              </p>
            </div>

            {/* Column 2: Working Time */}
            <div className="flex flex-col gap-8">
              <h3 className="text-4xl font-light text-main tracking-tight">Working Time</h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-muted uppercase tracking-widest text-[10px]">Week Days:</span>
                  <span className="text-main">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-muted uppercase tracking-widest text-[10px]">Saturday:</span>
                  <span className="text-main">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-muted uppercase tracking-widest text-[10px]">Sunday:</span>
                  <span className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Closed</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-muted uppercase tracking-widest text-[10px]">Emergency:</span>
                  <span className="text-main">24hrs / day</span>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col gap-8">
              <h3 className="text-4xl font-light text-main tracking-tight">Contact Us</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-muted">
                  G130, Kaladwas Extension, <br />
                  RIICO Industrial Area, <br />
                  Udaipur, 313003, Rajasthan
                </p>
                <p className="text-brand-accent font-bold">info@unitechtherm.com</p>
                <div className="space-y-1 text-main font-medium">
                  <p>+91 8696967111</p>
                  <p>+91 9799939994</p>
                  <p>0294 2942233</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted">
            <div>© 2026 Unitech Therminstruments Pvt. Ltd. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="/about" className="hover:text-main transition-colors">About Us</a>
              <a href="#" className="hover:text-main transition-colors">Privacy</a>
              <a href="#" className="hover:text-main transition-colors">Terms</a>
              <a href="#" className="hover:text-main transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
