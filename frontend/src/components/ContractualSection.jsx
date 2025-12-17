import React from 'react';
import { Clock, Lock, Shield, CheckSquare, BadgeCheck, FileText, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { contractualGuarantees, licenses } from '../data/mock';

const guaranteeIcons = [Clock, Lock, Shield, CheckSquare];

const ContractualSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Contractual Integrity</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Risk Belongs to Us.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Not You.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We don't just "promise" quality. We write it into the contract with financial penalties attached. If we fail, we pay.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contractualGuarantees.map((guarantee, idx) => {
            const Icon = guaranteeIcons[idx];
            return (
              <div key={idx} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">{guarantee.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{guarantee.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-500 text-xs">Authorized By Managing Director</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Licenses Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-slate-700" />
            <span className="text-slate-400 text-sm">Legal Authority - Valid Thru 2025</span>
            <div className="h-px w-16 bg-slate-700" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {licenses.map((license, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-amber-400" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-emerald-400 text-xs font-medium">VERIFIED</span>
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{license.type}</h4>
                <p className="text-slate-500 text-xs font-mono mb-3">LICENSE NO: {license.licenseNo}</p>
                <p className="text-amber-400 text-sm">{license.approval}</p>
                <Button variant="link" className="mt-4 p-0 text-slate-400 hover:text-amber-400 h-auto">
                  View Full Document
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="text-slate-500 text-xs">ISSUING AUTHORITY: DED</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to secure your project?</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base">
            Start Your Project Risk-Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContractualSection;
