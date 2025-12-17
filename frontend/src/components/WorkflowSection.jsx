import React, { useState } from 'react';
import { Lock, Cog, Hammer, KeyRound, CheckCircle, ChevronRight } from 'lucide-react';
import { operationalPhases } from '../data/mock';

const phaseIcons = {
  '01': Lock,
  '02': Cog,
  '03': Hammer,
  '04': KeyRound
};

const WorkflowSection = () => {
  const [activePhase, setActivePhase] = useState('01');
  const currentPhase = operationalPhases.find(p => p.phase === activePhase);
  const PhaseIcon = phaseIcons[activePhase];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Operational Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Precision
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Protocol.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We don't improvise. We execute a rigid 4-stage sequence for every project, ensuring financial safety and engineering accuracy.
          </p>
        </div>

        {/* System Status */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Phase Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {operationalPhases.map((phase, idx) => {
            const Icon = phaseIcons[phase.phase];
            const isActive = phase.phase === activePhase;
            return (
              <button
                key={phase.phase}
                onClick={() => setActivePhase(phase.phase)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-sm">PHASE {phase.phase}</span>
                <span className={`text-xs ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{phase.title}</span>
              </button>
            );
          })}  
        </div>

        {/* Active Phase Content */}
        {currentPhase && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Description */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <PhaseIcon className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">PHASE {currentPhase.phase}</p>
                  <h3 className="text-white font-bold text-xl">{currentPhase.subtitle}</h3>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">{currentPhase.description}</p>
              
              {/* Tasks */}
              <div className="space-y-3">
                {currentPhase.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-300 text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Controller Card */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-500 text-xs font-medium">Phase Controller</span>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">{currentPhase.controller.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{currentPhase.controller.name}</h4>
                  <p className="text-slate-400 text-sm">{currentPhase.controller.role}</p>
                </div>
              </div>

              {/* Status Terminal */}
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>STATUS: {currentPhase.status}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>AUTHORITY: {currentPhase.authority}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <ChevronRight className="w-4 h-4" />
                  <span>PHASE: {currentPhase.title.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkflowSection;
