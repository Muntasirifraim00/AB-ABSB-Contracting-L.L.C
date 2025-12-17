import React from 'react';
import { Download, Lock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { materialSpecs } from '../data/mock';

const MaterialsSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
            <span className="text-slate-400 text-xs font-mono">MATERIAL_SPECS_V.2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The "No-Equivalent"
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Policy.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
            Many contractors quote high-end brands but swap them for "approved equivalents" during construction to save cost.
            <span className="text-white font-semibold"> We don't.</span> The brand you see here is the brand we install.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD AVL (PDF)
          </Button>
        </div>

        {/* Material Specs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {materialSpecs.map((spec) => (
            <div key={spec.id} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
              {/* Header */}
              <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs font-mono">{spec.id}</span>
                  <Lock className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-lg mt-2">{spec.title}</h3>
              </div>

              {/* Items */}
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-slate-500 text-xs font-medium pb-3">Component</th>
                      <th className="text-left text-slate-500 text-xs font-medium pb-3">Approved Brand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {spec.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-3">
                          <p className="text-slate-300 text-sm">{item.component}</p>
                        </td>
                        <td className="py-3">
                          <p className="text-amber-400 text-sm font-medium">{item.brand}</p>
                          <p className="text-slate-500 text-xs">{item.spec}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs">STATUS</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
