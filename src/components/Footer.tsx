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
    { icon: Mail, href: 'mailto:vedc@vitpune.edu.in', label: 'Email' },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle animated background to match hero */}
      <div className="absolute inset-0 -z-10 opacity-[0.25]">
        <DarkVeil speed={0.6} hueShift={15} noiseIntensity={0.01} scanlineFrequency={0} scanlineIntensity={0} warpAmount={0.6} />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img src={logo} alt="V-EDC Logo" className="h-12 w-auto drop-shadow mx-auto md:mx-0" />
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering entrepreneurship at VIT Pune through innovation, collaboration, and excellence.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:vedc@vitpune.edu.in" className="hover:text-white transition-colors">
                  vedc@vitpune.edu.in
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <ExternalLink size={16} className="mt-0.5 flex-shrink-0" />
                <span>VIT Pune Campus</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} V-EDC, VIT Pune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
