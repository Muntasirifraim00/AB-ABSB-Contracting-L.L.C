import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
    { label: 'Privacy', href: '#privacy' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold">AB</span>
            </div>
            <div>
              <p className="text-white font-bold">ABSB</p>
              <p className="text-slate-500 text-xs">Contracting L.L.C</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved. Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
