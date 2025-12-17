import React from 'react';
import { Eye, Ruler, Palette, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const VisualIntegritySection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              {/* Project Preview */}
              <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <Eye className="w-10 h-10 text-amber-400" />
                    </div>
                    <p className="text-slate-400 text-sm">Villa Al Khawaneej Project</p>
                  </div>
                </div>
                
                {/* Progress Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 px-4 py-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-400 text-2xl font-bold">50%</span>
                  </div>
                  <span className="text-slate-400 text-xs">Completion Status</span>
                </div>
              </div>
              
              <div className="mt-4">
                <Progress value={50} className="h-2 bg-slate-700" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-2">
              <span className="text-emerald-400 text-sm font-medium">0% Gap Between Render & Reality</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Visual Integrity</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                We Build What
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">We Promise.</span>
              </h2>
              <p className="text-slate-400 text-lg">
                The gap between our architectural renders and the final handover is zero.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Ruler className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Pixel-Perfect Execution</h4>
                  <p className="text-slate-400 text-sm">Our site engineers use the 3D renders as the "Bible" for construction. If a tile doesn't align with the drawing, it gets redone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Material Fidelity</h4>
                  <p className="text-slate-400 text-sm">The marble you approve in the showroom is the marble you get on the floor. We provide material sample boards before a single brick is laid.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">No "Site Adjustments"</h4>
                  <p className="text-slate-400 text-sm">Typical contractors change designs on-site to "make it fit." We measure twice and cut once, preserving the architect's original vision.</p>
                </div>
              </div>
            </div>

            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualIntegritySection;
