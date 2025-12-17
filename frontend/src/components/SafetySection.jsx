import React from 'react';
import { Shield, HardHat, Clock, CheckCircle, Award, Link } from 'lucide-react';
import { Button } from './ui/button';
import { dualLicensingBenefits } from '../data/mock';

const SafetySection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HSE Protocol */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <HardHat className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">HSE Protocol V.2.0</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zero Accidents.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Zero Compromise.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Construction is dangerous. We mitigate risk through rigorous training and strict adherence to Dubai Municipality safety codes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all">
              <p className="text-5xl font-bold text-emerald-400 mb-2">50,000+</p>
              <p className="text-slate-400">Safe Man-Hours</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all">
              <p className="text-5xl font-bold text-emerald-400 mb-2">100%</p>
              <p className="text-slate-400">PPE Compliance</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-white font-semibold">Fully Insured Projects</p>
              <p className="text-slate-400 text-sm mt-1">Includes Workmen Compensation & Contractor's All Risk (CAR) Policy</p>
            </div>
          </div>
        </div>

        {/* Dual Licensing */}
        <div>
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Legal & Operational Shield</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interlocking Seals of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Total Coverage.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Most firms offer one or the other. We give you both: The legal authority to build high-grade assets and the specialist license to maintain them flawlessly—all under one unified command.
            </p>
          </div>

          {/* License Venn Diagram */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="flex items-center gap-0">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-amber-500/20 rounded-full flex items-center justify-center border-2 border-amber-500/40">
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">Contracting</p>
                    <p className="text-amber-400 text-xs">LLC (DXB-CN)</p>
                  </div>
                </div>
                <div className="w-40 h-40 md:w-48 md:h-48 bg-emerald-500/20 rounded-full flex items-center justify-center border-2 border-emerald-500/40 -ml-12">
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">Maintenance</p>
                    <p className="text-emerald-400 text-xs">LLC (DXB-MN)</p>
                  </div>
                </div>
              </div>
              {/* Center Link Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-700">
                <Link className="w-5 h-5 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-semibold text-lg text-center mb-8">What Dual Licensing Means For You:</h3>
            <div className="space-y-4">
              {dualLicensingBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4 hover:border-amber-500/30 transition-all">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base">
              Secure Your Project Lifecycle Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
