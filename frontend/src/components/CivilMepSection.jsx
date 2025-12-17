import React from 'react';
import { HardHat, Wrench, Link2 } from 'lucide-react';
import { civilMepTeam } from '../data/mock';

const CivilMepSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Unified Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Civil-MEP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Synchronization.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            40% of construction delays happen when Structural teams clash with Electrical/Plumbing teams. We eliminated the gap. At ABSB, they operate as a single engine.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Civil Team */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-400 font-bold text-sm">MM</span>
              </div>
              <div>
                <h3 className="text-white font-bold">{civilMepTeam.civil.name}</h3>
                <p className="text-amber-400 text-xs font-medium">{civilMepTeam.civil.role}</p>
              </div>
            </div>
            <div className="space-y-3">
              {civilMepTeam.civil.tasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-lg">
                  <HardHat className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm">{task}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">Civil Work</span>
                <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Coordinator */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30">
                <Link2 className="w-10 h-10 text-amber-400" />
              </div>
              {/* Connection Lines */}
              <div className="absolute top-1/2 -left-16 w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500/50" />
              <div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500/50" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">COORDINATED BY</p>
              <h3 className="text-white font-bold text-lg">{civilMepTeam.coordinator.name}</h3>
              <p className="text-amber-400 text-sm">{civilMepTeam.coordinator.role}</p>
            </div>
          </div>

          {/* MEP Team */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-400 font-bold text-sm">MR</span>
              </div>
              <div>
                <h3 className="text-white font-bold">{civilMepTeam.mep.name}</h3>
                <p className="text-amber-400 text-xs font-medium">{civilMepTeam.mep.role}</p>
              </div>
            </div>
            <div className="space-y-3">
              {civilMepTeam.mep.tasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-lg">
                  <Wrench className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm">{task}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">MEP Overlay</span>
                <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilMepSection;
