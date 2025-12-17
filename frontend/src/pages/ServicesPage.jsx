import React, { useState } from 'react';
import { Building, PaintBucket, Wrench, Hammer, Waves, Clock, Download, ChevronRight, HardHat, Lock, Cog, KeyRound, CheckCircle, Link2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { services, operationalPhases, civilMepTeam } from '../data/mock';

const serviceIcons = {
  construction: Building,
  interiors: PaintBucket,
  mep: Wrench,
  metal: Hammer,
  pools: Waves,
  amc: Clock
};

const phaseIcons = {
  '01': Lock,
  '02': Cog,
  '03': Hammer,
  '04': KeyRound
};

const categories = ['All', 'Construction', 'Interiors', 'Maintenance & MEP'];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePhase, setActivePhase] = useState('01');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const currentPhase = operationalPhases.find(p => p.phase === activePhase);
  const PhaseIcon = phaseIcons[activePhase];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineered for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Every Scale.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From turnkey construction to annual maintenance, we deliver comprehensive building solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Civil-MEP Synchronization */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Unified Workflow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Civil-MEP <span className="text-amber-400">Synchronization.</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              40% of construction delays happen when Structural teams clash with Electrical/Plumbing teams. We eliminated the gap.
            </p>
          </div>

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
            </div>

            {/* Coordinator */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30">
                  <Link2 className="w-10 h-10 text-amber-400" />
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Operational Workflow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Precision <span className="text-amber-400">Protocol.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We execute a rigid 4-stage sequence for every project, ensuring financial safety and engineering accuracy.
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
            {operationalPhases.map((phase) => {
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
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
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
                <div className="space-y-3">
                  {currentPhase.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-slate-900/50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>STATUS: {currentPhase.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>AUTHORITY: {currentPhase.authority}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-slate-400 mb-8">Our engineers are ready to discuss your project requirements.</p>
          <Link to="/contact">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
