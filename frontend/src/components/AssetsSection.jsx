import React from 'react';
import { Truck, Zap, Users, FileCheck, Settings, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { assets } from '../data/mock';

const assetIcons = {
  'FLT-01': Truck,
  'MCH-09': Zap,
  'HR-40': Users,
  'DED-LIC': FileCheck
};

const AssetsSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-slate-800/50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">SYSTEM STATUS: OPERATIONAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Don't Rent Reliability.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">We Own It.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Delays happen when contractors wait for rental equipment. At ABSB, we own our fleet, machinery, and manpower visas. When we say "start tomorrow," we mean it.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => {
            const Icon = assetIcons[asset.id];
            return (
              <div key={asset.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-xs font-mono">ASSET_ID: {asset.id}</span>
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{asset.title}</h3>
                
                {asset.items ? (
                  <div className="space-y-2">
                    {asset.items.map((item, idx) => (
                      <div key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-5xl font-bold text-amber-400 mb-2">{asset.count}</p>
                    <p className="text-slate-300 text-sm">{asset.label}</p>
                    <p className="text-slate-500 text-xs mt-2">{asset.extra}</p>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-emerald-400 text-xs">{asset.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Financial Stability</h4>
              <p className="text-slate-400 text-sm">Zero-debt asset ownership ensures project continuity.</p>
            </div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">In-House Maintenance</h4>
              <p className="text-slate-400 text-sm">Our machinery is serviced weekly to prevent breakdowns.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
            Hire Our Fleet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
