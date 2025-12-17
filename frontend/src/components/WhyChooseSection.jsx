import React from 'react';
import { Clock, Sparkles, FileText, Zap, Shield, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { whyChooseFeatures } from '../data/mock';

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-800/50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Why Leading Investors Choose ABSB</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Don't Just Build Structures.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">We Engineer Legacies.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            In a market flooded with contractors, we are your strategic partners. We bridge the gap between architectural dreams and structural reality with zero compromise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Zero Delay Promise */}
          <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                <Clock className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">The "Zero-Delay" Promise</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Time is money. Our rigorous project management protocols and in-house teams allow us to hit milestones with military precision.
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-amber-400">98%</span>
                <span className="text-slate-400 text-sm mb-2">Projects Delivered On Schedule</span>
              </div>
            </div>
          </div>

          {/* Uncompromising Finish */}
          <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                <Sparkles className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Uncompromising Finish</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From marble alignment to joinery gaps, we obsess over the millimeters you don't see.
                </p>
              </div>
            </div>
            <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Interior Finish</p>
                <p className="text-amber-400 text-sm font-medium">Pixel-Perfect Execution</p>
              </div>
            </div>
          </div>

          {/* Transparent Pricing */}
          <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                <FileText className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Transparent Pricing</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No hidden clauses. We provide detailed BOQs so you know exactly where every Dirham goes.
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
              Request a Sample Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Smart MEP */}
          <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Smart MEP Integration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We don't just lay pipes; we optimize energy flow. Our MEP solutions reduce long-term operational costs.
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
              View MEP Capabilities
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Safety Badge */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium text-sm">Safety First</span>
            <span className="text-slate-400 text-sm">ISO Certified & Insured</span>
          </div>
          <div className="text-slate-500 text-sm">Don't leave your project to chance</div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base">
            <Phone className="mr-2 w-5 h-5" />
            Get Your Free Technical Survey
          </Button>
          <p className="text-slate-500 text-xs mt-3">Response time: Under 2 hours</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
