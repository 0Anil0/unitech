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

      <footer className="py-16 border-t border-white/5 bg-brand-deep transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black text-main">UNITECH<span className="text-brand-accent italic">.</span></span>
            <p className="text-xs text-muted max-w-xs">
              Global leaders in high-precision temperature instrumentation since 1995. Certified ISO 9001:2015.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-main uppercase tracking-widest text-[10px]">Products</p>
              <a href="#products" className="text-muted hover:text-brand-accent transition-colors">Thermocouples</a>
              <a href="#products" className="text-muted hover:text-brand-accent transition-colors">RTD Sensors</a>
              <a href="#products" className="text-muted hover:text-brand-accent transition-colors">Digital Gauges</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-main uppercase tracking-widest text-[10px]">Company</p>
              <a href="#aboutus" className="text-muted hover:text-brand-accent transition-colors">Our Story</a>
              <a href="#aboutus" className="text-muted hover:text-brand-accent transition-colors">Engineering</a>
              <a href="#contact" className="text-muted hover:text-brand-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted">
          <div>© 2026 Unitech Temperature Systems. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-main transition-colors">Privacy</a>
            <a href="#" className="hover:text-main transition-colors">Terms</a>
            <a href="#" className="hover:text-main transition-colors">Cookies</a>
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
