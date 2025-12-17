import React from 'react';
import { Thermometer, Wifi, ShieldCheck, TrendingUp, Calculator, FileSearch } from 'lucide-react';
import { Button } from './ui/button';
import { futureFeatures } from '../data/mock';

const featureIcons = [Thermometer, Wifi, ShieldCheck];

const FutureReadySection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Future-Ready Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Build for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">2030, Not Just 2025.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A building is a long-term asset. We integrate smart technologies and sustainable materials today, so you don't have to retrofit expensive upgrades tomorrow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {futureFeatures.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="group bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Market Insight</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stop Renting. Start Building.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The market is rising. Locking in a construction contract today secures current material prices and protects you from inflation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-6">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Construction Cost
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-6">
                <FileSearch className="w-5 h-5 mr-2" />
                Free Feasibility Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureReadySection;
