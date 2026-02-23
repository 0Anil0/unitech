import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const { currentAccent, setCurrentAccent, accentThemes, isDarkMode, toggleBackgroundTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-brand-deep/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center text-main">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-500">
              <span className="text-white font-black text-xl -rotate-12 group-hover:rotate-0 transition-all duration-500">U</span>
            </div>
            <span className="text-2xl font-black tracking-tighter transition-colors">
              UNITECH<span className="text-brand-accent italic">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {/* Dashboard Link */}
            <NavLink to="/dashboard" className={({ isActive }) => `nav-link text-sm font-semibold tracking-wide ${isActive ? 'text-brand-accent' : ''}`}>
              Dashboard
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductHovered(true)}
              onMouseLeave={() => setIsProductHovered(false)}
            >
              <button className={`nav-link text-sm font-semibold tracking-wide flex items-center gap-1 ${isProductHovered ? 'text-brand-accent' : ''}`}>
                Products
                <svg className={`w-3 h-3 transition-transform duration-300 ${isProductHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 pt-2 w-64 transition-all duration-300 transform origin-top ${isProductHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-brand-deep/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-2xl p-4 space-y-2">
                  <Link to="/products" className="block p-3 hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsProductHovered(false)}>
                    <p className="text-xs font-black text-brand-accent uppercase tracking-widest mb-1">Catalog</p>
                    <p className="text-sm font-bold">All Products</p>
                  </Link>
                  <div className="pt-2 border-t border-white/5">
                    <p className="px-3 py-2 text-[10px] font-black text-muted uppercase tracking-[0.2em]">Categories</p>
                    <Link to="/products/categories/thermal-monitoring" className="block p-3 hover:bg-white/5 rounded-xl transition-colors text-sm font-bold" onClick={() => setIsProductHovered(false)}>
                      Thermal Monitoring
                    </Link>
                    <Link to="/products/categories/electrified-heating" className="block p-3 hover:bg-white/5 rounded-xl transition-colors text-sm font-bold" onClick={() => setIsProductHovered(false)}>
                      Electrified Heating
                    </Link>
                    <Link to="/products/categories/heavy-duty-cable" className="block p-3 hover:bg-white/5 rounded-xl transition-colors text-sm font-bold" onClick={() => setIsProductHovered(false)}>
                      Heavy Duty Cable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/industries" className={({ isActive }) => `nav-link text-sm font-semibold tracking-wide ${isActive ? 'text-brand-accent' : ''}`}>
              Industries
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link text-sm font-semibold tracking-wide ${isActive ? 'text-brand-accent' : ''}`}>
              About Us
            </NavLink>

            {/* Background Theme Toggle */}
            <button
              onClick={toggleBackgroundTheme}
              className="p-2 rounded-full glass-panel hover:bg-brand-accent/20 transition-all border-none"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>

            {/* Accent Selector */}
            <div className="flex items-center gap-2 px-3 py-1.5 glass-panel rounded-full relative group">
              {accentThemes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setCurrentAccent(t)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${currentAccent.name === t.name ? 'ring-2 ring-white ring-offset-2 ring-offset-brand-deep shadow-lg' : 'opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: t.accent }}
                  title={t.name}
                />
              ))}
            </div>

            <Link to="/contact" className="px-6 py-2.5 bg-brand-accent hover:filter hover:brightness-110 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-brand-accent/20">
              Contact Us
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleBackgroundTheme} className="p-2">
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen border-b border-white/10 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-brand-deep/98 backdrop-blur-2xl`}>
        <div className="px-6 py-10 space-y-8">
          <div className="space-y-6">
            <Link to="/dashboard" className="block text-2xl font-bold opacity-70 hover:opacity-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            <Link to="/products" className="block text-2xl font-bold opacity-70 hover:opacity-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/industries" className="block text-2xl font-bold opacity-70 hover:opacity-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Industries</Link>
            <Link to="/about" className="block text-2xl font-bold opacity-70 hover:opacity-100 transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Industrial Accent</p>
            <div className="flex gap-4">
              {accentThemes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setCurrentAccent(t);
                    setIsMenuOpen(false);
                  }}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${currentAccent.name === t.name ? 'border-brand-accent scale-110' : 'border-transparent opacity-60'}`}
                  style={{ backgroundColor: t.accent }}
                />
              ))}
            </div>
          </div>

          <Link to="/contact" className="block w-full py-4 bg-brand-accent text-white rounded-xl text-center font-bold text-lg shadow-xl shadow-brand-accent/20" onClick={() => setIsMenuOpen(false)}>
            Technical Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
