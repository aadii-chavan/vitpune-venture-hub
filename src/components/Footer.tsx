import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';
import DarkVeil from '@/components/DarkVeil';

const Footer = () => {
  const footerLinks = {
    quick: [
      { label: 'About Us', path: '/about' },
      { label: 'Events', path: '/events' },
      { label: 'Team', path: '/team' },
      { label: 'Gallery', path: '/gallery' },
    ],
    resources: [
      { label: 'E-Summit', path: '/esummit' },
      { label: 'Sponsors', path: '/sponsors' },
      { label: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:edc@vit.edu', label: 'Email' },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-[#0a0c10] via-[#16212e] to-[#0a0c10] border-t border-[#8A9BB4]/10">
      
      {/* Background Animation - Tuned for Glacier vibe */}
      <div className="absolute inset-0 -z-10 opacity-[0.3]">
        <DarkVeil 
          speed={0.4} 
          hueShift={210} // Shifted toward blue
          noiseIntensity={0.02} 
          warpAmount={0.8} 
        />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Logo & Description */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="V-EDC Logo" 
              className="h-14 w-auto drop-shadow-[0_0_15px_rgba(44,110,161,0.3)] mx-auto md:mx-0 brightness-110" 
            />
            <p className="text-sm text-[#AFB7C7] leading-relaxed max-w-xs">
              Empowering entrepreneurship at VIT Pune through innovation, collaboration, and excellence.
            </p>
            
            {/* Social Links with Glacier Blue highlights */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full ring-1 ring-[#8A9BB4]/30 text-[#AFB7C7] hover:bg-[#2C6EA1]/20 hover:text-[#D6D6DB] hover:ring-[#2C6EA1] transition-all duration-300 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-[#D6D6DB] mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#AFB7C7] hover:text-[#2C6EA1] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-[#2C6EA1] transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-[#D6D6DB] mb-6 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#AFB7C7] hover:text-[#2C6EA1] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-[#2C6EA1] transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-[#D6D6DB] mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm text-[#AFB7C7]">
              <li className="flex items-start gap-3 justify-center md:justify-start group">
                <Mail size={18} className="text-[#2C6EA1] mt-0.5 flex-shrink-0" />
                <a href="mailto:edc@vit.edu" className="hover:text-[#D6D6DB] transition-colors">
                  edc@vit.edu
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <ExternalLink size={18} className="text-[#2C6EA1] mt-0.5 flex-shrink-0" />
                <span className="leading-tight">VIT Pune Campus, Upper Indira Nagar, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8A9BB4]/10 text-center">
          <p className="text-xs text-[#8A9BB4] font-medium tracking-wide">
            © {new Date().getFullYear()} V-EDC, VIT PUNE. <span className="text-[#AFB7C7]">STAY CURIOUS. STAY HUNGRY.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;