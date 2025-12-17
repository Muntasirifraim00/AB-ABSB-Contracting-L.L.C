import React from 'react';
import { Shield, Handshake, CheckCircle } from 'lucide-react';
import { engineeringPartners, executionPartners, companyInfo } from '../data/mock';

const PartnerCard = ({ partner, type }) => (
  <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-xl p-5 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-amber-400 font-bold text-sm shrink-0 group-hover:bg-amber-500/20 transition-colors">
        {partner.id}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-semibold text-sm truncate">{partner.name}</h4>
        <p className="text-slate-400 text-xs mt-0.5">{partner.role}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-slate-500 text-xs">{type === 'engineering' ? 'Clearance Level:' : 'Collaboration:'}</span>
          <span className="text-amber-400 text-xs font-medium">{partner.clearance || partner.collaboration}</span>
        </div>
      </div>
    </div>
  </div>
);

const PartnersSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-800/50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300 text-sm">Verified Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vetted by Giants.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Trusted by the Best.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't just bid on projects; we are invited to them. Our operational standards meet the rigorous demands of Dubai's elite engineering consultants and master developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Engineering Approval */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">THE VETTING AUTHORITY</p>
                <h3 className="text-white font-semibold text-lg">Engineering Approval</h3>
              </div>
            </div>
            <div className="space-y-4">
              {engineeringPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} type="engineering" />
              ))}
            </div>
          </div>

          {/* Execution Partners */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Handshake className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">STRATEGIC ALLIANCES</p>
                <h3 className="text-white font-semibold text-lg">Execution Partners</h3>
              </div>
            </div>
            <div className="space-y-4">
              {executionPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} type="execution" />
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Contractor Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700">
            <span className="text-slate-400 text-sm">Registered Sub-Contractor ID:</span>
            <span className="text-amber-400 font-mono font-semibold">{companyInfo.subContractorId}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
