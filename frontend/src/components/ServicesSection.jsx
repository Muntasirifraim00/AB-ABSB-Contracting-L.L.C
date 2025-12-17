import React, { useState } from 'react';
import { Building, PaintBucket, Wrench, Hammer, Waves, Clock, Download, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '../data/mock';

const serviceIcons = {
  construction: Building,
  interiors: PaintBucket,
  mep: Wrench,
  metal: Hammer,
  pools: Waves,
  amc: Clock
};

const categories = ['All', 'Construction', 'Interiors', 'Maintenance & MEP'];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-slate-800/50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Capability Matrix</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Every Scale.</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Download className="w-4 h-4 mr-2" />
            Download Full Profile
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.id] || Building;
            return (
              <div
                key={service.id}
                className={`group bg-slate-800/30 hover:bg-slate-800/60 border rounded-2xl p-6 transition-all duration-300 ${
                  service.isCore 
                    ? 'border-amber-500/30 hover:border-amber-500/50' 
                    : 'border-slate-700/50 hover:border-amber-500/30'
                }`}
              >
                {service.isCore && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded-full mb-4">
                    <span className="text-amber-400 text-xs font-medium">Core Service</span>
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-700/50">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
