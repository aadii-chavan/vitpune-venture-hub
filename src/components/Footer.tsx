import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import logo from '@/assets/vedc-logo.png';

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
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="V-EDC Logo" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering entrepreneurship at VIT Pune through innovation, collaboration, and excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:vedc@vitpune.edu.in" className="hover:text-primary transition-colors">
                  vedc@vitpune.edu.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-0.5 flex-shrink-0" />
                <span>VIT Pune Campus</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} V-EDC, VIT Pune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
