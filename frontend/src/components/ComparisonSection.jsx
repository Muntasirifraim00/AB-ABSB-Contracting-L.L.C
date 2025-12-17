import React from 'react';
import { AlertTriangle, CheckCircle, X, Check } from 'lucide-react';
import { Button } from './ui/button';
import { comparisonData } from '../data/mock';

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">The Market Reality</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Before
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">You Commit.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Construction is an unregulated minefield. Don't let a "low initial quote" turn into a high-cost nightmare. See exactly what you're paying for.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Typical Contractor */}
          <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl overflow-hidden">
            <div className="bg-red-500/10 border-b border-red-500/20 p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Typical Contractor</h3>
                  <p className="text-red-400 text-sm">High Risk Profile</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {comparisonData.typical.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                <span className="text-red-400 text-sm font-medium">CAUTION</span>
              </div>
            </div>
          </div>

          {/* ABSB Standard */}
          <div className="bg-slate-900/50 border border-emerald-500/30 rounded-2xl overflow-hidden relative">
            {/* Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/20 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="relative bg-emerald-500/10 border-b border-emerald-500/20 p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">ABSB Standard</h3>
                  <p className="text-emerald-400 text-sm">Guaranteed Outcome</p>
                </div>
              </div>
            </div>
            <div className="relative p-6 space-y-6">
              {comparisonData.absb.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative px-6 pb-6">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-6">
                Choose Certainty. Choose ABSB.
              </Button>
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16">
          <div className="w-16 h-16 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center">
            <span className="text-amber-400 font-bold text-lg">VS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
