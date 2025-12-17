import React, { useState, useMemo } from 'react';
import { Download, Lock, CheckCircle, Truck, Zap, Users, FileCheck, Settings, DollarSign, Thermometer, Wifi, ShieldCheck, Calculator, ArrowRight, Info, TrendingUp, FileSearch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Link } from 'react-router-dom';
import { assets, materialSpecs, futureFeatures } from '../data/mock';

const assetIcons = { 'FLT-01': Truck, 'MCH-09': Zap, 'HR-40': Users, 'DED-LIC': FileCheck };
const featureIcons = [Thermometer, Wifi, ShieldCheck];

const ResourcesPage = () => {
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
    return {
      low: Math.round(baseCost).toLocaleString(),
      high: Math.round(baseCost * 1.15).toLocaleString()
    };
  }, [projectType, area, finishing]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tools & <span className="text-amber-400">Specifications</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cost calculator, material specs, and company resources.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Instant Estimation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Know Your Numbers <span className="text-amber-400">Before You Build.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get a rough order of magnitude (ROM) estimate based on current 2025 Dubai market rates.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-8">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-400 font-medium text-sm">Why this matters?</p>
              <p className="text-slate-400 text-sm">Most contractors hide costs to win the bid, then add "variations" later. We believe in financial transparency from day one.</p>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <div className="mb-8">
              <label className="text-slate-300 text-sm font-medium mb-4 block">Project Type</label>
              <div className="grid grid-cols-3 gap-3">
                {[{ id: 'villa', label: 'Villa' }, { id: 'commercial', label: 'Commercial' }, { id: 'warehouse', label: 'Warehouse' }].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      projectType === type.id ? 'bg-amber-500 text-slate-900' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-slate-300 text-sm font-medium">Built-Up Area (BUA)</label>
                <span className="text-amber-400 font-bold">{area[0].toLocaleString()} sq.ft</span>
              </div>
              <Slider value={area} onValueChange={setArea} min={1000} max={20000} step={500} className="w-full" />
              <div className="flex justify-between mt-2">
                <span className="text-slate-500 text-xs">1,000</span>
                <span className="text-slate-500 text-xs">20,000+</span>
              </div>
            </div>

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
                      finishing === level.id ? 'bg-amber-500/20 border-amber-500/50 border-2' : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <p className={`font-medium text-sm mb-1 ${finishing === level.id ? 'text-amber-400' : 'text-white'}`}>{level.label}</p>
                    <p className="text-slate-500 text-xs">{level.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 text-center mb-6">
              <p className="text-slate-400 text-sm mb-2">Estimated Construction Cost</p>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">AED {estimate.low} - AED {estimate.high}</p>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
                  Get Detailed Breakdown <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material Specs */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <span className="text-slate-400 text-xs font-mono">MATERIAL_SPECS_V.2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The "No-Equivalent" <span className="text-amber-400">Policy.</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-8">
              The brand you see here is the brand we install. No substitutions.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD AVL (PDF)
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {materialSpecs.map((spec) => (
              <div key={spec.id} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
                <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-mono">{spec.id}</span>
                    <Lock className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mt-2">{spec.title}</h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-slate-500 text-xs font-medium pb-3">Component</th>
                        <th className="text-left text-slate-500 text-xs font-medium pb-3">Brand</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {spec.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="py-3"><p className="text-slate-300 text-sm">{item.component}</p></td>
                          <td className="py-3">
                            <p className="text-amber-400 text-sm font-medium">{item.brand}</p>
                            <p className="text-slate-500 text-xs">{item.spec}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Locked</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assets */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">OPERATIONAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Don't Rent Reliability. <span className="text-amber-400">We Own It.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assets.map((asset) => {
              const Icon = assetIcons[asset.id];
              return (
                <div key={asset.id} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-xs font-mono">ASSET_ID: {asset.id}</span>
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4">{asset.title}</h3>
                  {asset.items ? (
                    <div className="space-y-2">
                      {asset.items.map((item, idx) => (
                        <div key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-amber-400">•</span>{item}
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
        </div>
      </section>

      {/* Future Ready */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Future-Ready Build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Build for <span className="text-amber-400">2030, Not Just 2025.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {futureFeatures.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/30 transition-all">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Market Insight</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stop Renting. Start Building.</h3>
                <p className="text-slate-400">Lock in current material prices and protect yourself from inflation.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link to="/contact">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-6">
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Profile */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Take Us With You</h2>
          <p className="text-slate-400 mb-8">Download our comprehensive company profile with case studies and credentials.</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
            <Download className="w-5 h-5 mr-2" />
            Download PDF Profile (4.5 MB)
          </Button>
          <p className="text-slate-500 text-xs mt-3">*No email required. Direct download.</p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
