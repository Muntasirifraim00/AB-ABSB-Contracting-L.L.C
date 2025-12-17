import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

const EstimatorSection = () => {
  const [projectType, setProjectType] = useState('villa');
  const [area, setArea] = useState([3000]);
  const [finishing, setFinishing] = useState('standard');

  const estimate = useMemo(() => {
    const baseRates = {
      villa: { shell: 250, standard: 350, luxury: 500 },
      commercial: { shell: 200, standard: 300, luxury: 450 },
      warehouse: { shell: 150, standard: 250, luxury: 400 }
    };

    const rate = baseRates[projectType][finishing];
    const sqft = area[0];
    const baseCost = rate * sqft;
    const lowRange = baseCost;
    const highRange = baseCost * 1.15;

    return {
      low: Math.round(lowRange).toLocaleString(),
      high: Math.round(highRange).toLocaleString()
    };
  }, [projectType, area, finishing]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Instant Estimation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know Your Numbers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Before You Build.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't wait weeks for a quote. Get a rough order of magnitude (ROM) estimate instantly based on current 2025 market rates for materials and labor in Dubai.
          </p>
        </div>

        {/* Info Banner */}
        <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-8">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-400 font-medium text-sm">Why this matters?</p>
            <p className="text-slate-400 text-sm">Most contractors hide costs to win the bid, then add "variations" later. We believe in financial transparency from day one.</p>
          </div>
        </div>

        {/* Calculator */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          {/* Project Type */}
          <div className="mb-8">
            <label className="text-slate-300 text-sm font-medium mb-4 block">Project Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'villa', label: 'Villa' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'warehouse', label: 'Warehouse' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    projectType === type.id
                      ? 'bg-amber-500 text-slate-900'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-slate-300 text-sm font-medium">Built-Up Area (BUA)</label>
              <span className="text-amber-400 font-bold">{area[0].toLocaleString()} sq.ft</span>
            </div>
            <Slider
              value={area}
              onValueChange={setArea}
              min={1000}
              max={20000}
              step={500}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-slate-500 text-xs">1,000</span>
              <span className="text-slate-500 text-xs">20,000+</span>
            </div>
          </div>

          {/* Finishing Level */}
          <div className="mb-8">
            <label className="text-slate-300 text-sm font-medium mb-4 block">Finishing Level</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'shell', label: 'Core & Shell', desc: 'Concrete structure & blockwork only.' },
                { id: 'standard', label: 'Standard', desc: 'Ceramic tiles, standard joinery & paint.' },
                { id: 'luxury', label: 'Luxury', desc: 'Marble flooring, premium sanitary & smart home.' }
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => setFinishing(level.id)}
                  className={`px-4 py-4 rounded-xl text-left transition-all ${
                    finishing === level.id
                      ? 'bg-amber-500/20 border-amber-500/50 border-2'
                      : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <p className={`font-medium text-sm mb-1 ${
                    finishing === level.id ? 'text-amber-400' : 'text-white'
                  }`}>{level.label}</p>
                  <p className="text-slate-500 text-xs">{level.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <p className="text-slate-400 text-sm mb-2">Estimated Construction Cost</p>
            <p className="text-3xl md:text-4xl font-bold text-amber-400">
              AED {estimate.low} - AED {estimate.high}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
              Get Detailed Breakdown PDF
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimatorSection;
