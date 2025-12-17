import React from 'react';
import { Download, FileText, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const ProfileDownloadSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Company Profile 2025</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Ready to Call?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Take Us With You.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Download our comprehensive portfolio. It includes detailed case studies, material specifications, and our full trade license credentials.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Profile
              <span className="ml-2 text-sm opacity-75">(4.5 MB)</span>
            </Button>
            <p className="text-slate-500 text-xs mt-3">*No email required. Direct download.</p>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl p-6 border border-amber-500/20">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Cover</p>
                    <h3 className="text-white font-bold text-xl">ABSB</h3>
                    <p className="text-amber-400 text-sm">Contracting L.L.C</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold text-amber-400">20</p>
                    <p className="text-3xl font-bold text-white">25</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-amber-500/20">
                  <p className="text-slate-300 text-sm">Official Profile</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-700/50 rounded-full blur-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDownloadSection;
