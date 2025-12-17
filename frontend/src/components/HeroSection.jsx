import React from 'react';
import { ArrowRight, FileText, CheckCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { stats, liveTicker, companyInfo } from '../data/mock';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-800/50 rounded-full blur-2xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">ISO Certified Excellence</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Precision in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Every Structure.
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              From turnkey luxury villas to complex industrial MEP solutions, we build the foundations of Dubai's future with unwavering integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-base">
                <FileText className="mr-2 w-5 h-5" />
                Company Profile
              </Button>
            </div>

            {/* Featured Capability Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">G+1</div>
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">MEP</div>
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">FIT</div>
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Featured Capability</p>
                <p className="text-amber-400 text-xs">G+1 Turnkey Construction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Project Card */}
          <div className="relative">
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-2xl">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-amber-400 text-2xl font-bold">Villa</span>
                    </div>
                    <p className="text-slate-400 text-sm">Villa Project</p>
                    <p className="text-amber-400 text-xs mt-1">View Project</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-slate-900/90 px-3 py-1 rounded-full">
                  <span className="text-amber-400 text-xs font-medium">01</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-400 text-xs">Client Satisfaction</span>
                  </div>
                  <p className="text-white text-2xl font-bold">98%</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-400 text-xs">Safety Compliance</span>
                  </div>
                  <p className="text-white text-2xl font-bold">100%</p>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Need an estimate?</p>
                  <p className="text-amber-400 text-xs">Call Now: {companyInfo.phone}</p>
                </div>
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-700/50 rounded-full blur-lg" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/30 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...liveTicker, ...liveTicker, ...liveTicker].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 text-slate-400 text-sm">
              <span className="text-amber-400 font-medium">{item.label}:</span>
              <span className="text-white">{item.value}</span>
              <span className="text-slate-600 mx-4">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
