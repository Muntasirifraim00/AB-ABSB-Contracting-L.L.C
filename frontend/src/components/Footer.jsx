import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, supplyPartners } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Partners Marquee */}
      <div className="py-8 border-b border-slate-800 overflow-hidden">
        <div className="text-center mb-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider">Powered by the World's Best</p>
        </div>
        <div className="animate-marquee-slow whitespace-nowrap flex items-center gap-16">
          {[...supplyPartners, ...supplyPartners, ...supplyPartners].map((partner, idx) => (
            <span key={idx} className="text-xl font-bold text-slate-700 hover:text-slate-500 transition-colors">
              {partner}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold">AB</span>
              </div>
              <div>
                <p className="text-white font-bold">ABSB</p>
                <p className="text-slate-500 text-xs">Contracting L.L.C</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-4 max-w-md">
              From turnkey luxury villas to complex industrial MEP solutions, we build the foundations of Dubai's future.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              ISO Certified Excellence
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                <span className="text-slate-500">Phone:</span><br />
                <a href={`tel:${companyInfo.phone}`} className="text-amber-400 hover:underline">{companyInfo.phone}</a>
              </p>
              <p className="text-slate-400">
                <span className="text-slate-500">Email:</span><br />
                <a href={`mailto:${companyInfo.email}`} className="text-amber-400 hover:underline">{companyInfo.email}</a>
              </p>
              <p className="text-slate-400">
                <span className="text-slate-500">Address:</span><br />
                {companyInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved. Dubai, UAE.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
