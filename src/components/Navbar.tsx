import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/vedc-logo.png';
import GlassSurface from '@/components/GlassSurface';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/team', label: 'Team' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/esummit', label: 'E-Summit' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent pt-5 sm:pt-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3">
        <GlassSurface
          width="100%"
          height={68}
          borderRadius={50}
          brightness={8}
          opacity={0.9}
          blur={26}
          backgroundOpacity={isScrolled ? 0.36 : 0.28}
          saturation={1.6}
          displace={0.5}
          distortionScale={-160}
          redOffset={4}
          greenOffset={12}
          blueOffset={20}
          preferBackdrop={true}
          mixBlendMode="normal"
          className="border border-white/10 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="w-full flex items-center justify-between px-3 sm:px-4 md:px-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="V-EDC logo" className="w-8 h-8 rounded" />
              <span className="text-lg sm:text-xl font-bold text-white/90">V-EDC</span>
            </Link>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${isActive(item.path) ? 'text-white' : 'text-white/80 hover:text-white'} transition-colors duration-200 font-medium`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-3 sm:px-4 lg:px-8 pb-2"
          >
            <GlassSurface
              width="100%"
              height="65"
              borderRadius={50}
              brightness={8}
              opacity={0.9}
              blur={26}
              backgroundOpacity={0.28}
              saturation={1.6}
              displace={0.5}
              distortionScale={-160}
              redOffset={4}
              greenOffset={12}
              blueOffset={20}
              preferBackdrop={true}
              mixBlendMode="normal"
              className="border border-white/10 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl w-full"
            >
              <div className="w-full px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`${isActive(item.path) ? 'text-white' : 'text-white/90 hover:text-white'} block w-full text-left px-3 py-3 text-sm sm:text-base transition-colors duration-200 rounded-lg hover:bg-white/5`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </GlassSurface>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
