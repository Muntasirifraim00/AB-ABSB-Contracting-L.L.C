import React from 'react';
import { ArrowRight, FileText, CheckCircle, Phone, Shield, Handshake, Clock, Sparkles, Building, Wrench, PaintBucket, MapPin, Star, Calculator, Download, Zap, HardHat, Users, Lock, Cog, Hammer, KeyRound } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  stats, 
  liveTicker, 
  companyInfo, 
  engineeringPartners, 
  executionPartners,
  services,
  projects,
  testimonials,
  materialSpecs,
  operationalPhases,
  teamMembers
} from '../data/mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* ============== HERO SECTION ============== */}
      <section className="relative min-h-[90vh] bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-800/50 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">ISO Certified Excellence</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Precision in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Every Structure.
                </span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                From turnkey luxury villas to complex industrial MEP solutions, we build the foundations of Dubai's future with unwavering integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="group bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base w-full sm:w-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-base w-full sm:w-auto">
                    <FileText className="mr-2 w-5 h-5" />
                    Company Profile
                  </Button>
                </Link>
              </div>

              {/* Featured Capability Badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">G+1</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">MEP</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-amber-400 text-xs font-bold">FIT</div>
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-medium">Featured Capability</p>
                  <p className="text-amber-400 text-xs">G+1 Turnkey Construction</p>
                </div>
              </div>
            </div>

            {/* Right Content - Project Card */}
            <div className="relative">
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <span className="text-amber-400 text-2xl font-bold">Villa</span>
                      </div>
                      <p className="text-slate-400 text-sm">Villa Project</p>
                      <Link to="/projects" className="text-amber-400 text-xs mt-1 hover:underline">View Project</Link>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-xs font-medium">01</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-400 text-xs">Client Satisfaction</span>
                    </div>
                    <p className="text-white text-2xl font-bold">98%</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-400 text-xs">Safety Compliance</span>
                    </div>
                    <p className="text-white text-2xl font-bold">100%</p>
                  </div>
                </div>

                <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm">Need an estimate?</p>
                    <p className="text-amber-400 text-xs">Call Now: {companyInfo.phone}</p>
                  </div>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-slate-900" onClick={() => window.location.href = `tel:${companyInfo.phone}`}>
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/30 transition-colors duration-300">
                <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...liveTicker, ...liveTicker, ...liveTicker].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-amber-400 font-medium">{item.label}:</span>
                <span className="text-white">{item.value}</span>
                <span className="text-slate-600 mx-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHY CHOOSE ABSB (Preview from About) ============== */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Why Leading Investors Choose ABSB</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Don't Just Build Structures.
              <br />
              <span className="text-amber-400">We Engineer Legacies.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              In a market flooded with contractors, we are your strategic partners. We bridge the gap between architectural dreams and structural reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
              <Clock className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Zero-Delay Promise</h3>
              <p className="text-slate-400 text-sm">98% projects delivered on schedule</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
              <Sparkles className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Uncompromising Finish</h3>
              <p className="text-slate-400 text-sm">We obsess over the millimeters</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
              <Shield className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">ISO Certified</h3>
              <p className="text-slate-400 text-sm">Fully insured projects</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
              <Handshake className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Transparent Pricing</h3>
              <p className="text-slate-400 text-sm">Detailed BOQs, no hidden costs</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PARTNERS PREVIEW (from About) ============== */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300 text-sm">Verified Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vetted by Giants. <span className="text-amber-400">Trusted by the Best.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We don't just bid on projects; we are invited to them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                Engineering Approval
              </h3>
              <div className="space-y-3">
                {engineeringPartners.slice(0, 2).map((partner) => (
                  <div key={partner.id} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-amber-500/30 transition-all">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-amber-400 font-bold text-sm">{partner.id}</div>
                    <div>
                      <p className="text-white font-medium text-sm">{partner.name}</p>
                      <p className="text-slate-400 text-xs">{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-amber-400" />
                Execution Partners
              </h3>
              <div className="space-y-3">
                {executionPartners.slice(0, 2).map((partner) => (
                  <div key={partner.id} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-amber-500/30 transition-all">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-amber-400 font-bold text-sm">{partner.id}</div>
                    <div>
                      <p className="text-white font-medium text-sm">{partner.name}</p>
                      <p className="text-slate-400 text-xs">{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                View All Partners & Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== SERVICES PREVIEW ============== */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Capability Matrix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engineered for <span className="text-amber-400">Every Scale.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From turnkey construction to annual maintenance, we deliver comprehensive building solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 3).map((service) => {
              const icons = { construction: Building, interiors: PaintBucket, mep: Wrench };
              const Icon = icons[service.id] || Building;
              return (
                <div key={service.id} className={`group bg-slate-800/30 hover:bg-slate-800/60 border rounded-2xl p-6 transition-all duration-300 ${service.isCore ? 'border-amber-500/30' : 'border-slate-700/50 hover:border-amber-500/30'}`}>
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
                </div>
              );
            })}
          </div>

          {/* Workflow Preview */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">The Precision Protocol</h3>
              <p className="text-slate-400 text-sm">4-stage sequence for every project</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operationalPhases.map((phase) => {
                const icons = { '01': Lock, '02': Cog, '03': Hammer, '04': KeyRound };
                const Icon = icons[phase.phase];
                return (
                  <div key={phase.phase} className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-amber-500/20 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <p className="text-amber-400 text-xs font-bold mb-1">PHASE {phase.phase}</p>
                    <p className="text-white text-sm font-medium">{phase.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
                View All Services & Workflow
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PROJECTS PREVIEW ============== */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Operational Map</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building <span className="text-amber-400">Landmarks.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our portfolio of luxury villas, commercial buildings, and infrastructure projects across Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-12 h-12 text-slate-600" />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                    <span className="text-emerald-400 text-xs font-medium">Active</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-sm font-bold">0{project.id}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Progress</span>
                    <span className="text-amber-400 text-xs font-bold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-1 mb-3 bg-slate-700" />
                  <h3 className="text-white font-bold mb-1">{project.title}</h3>
                  <p className="text-slate-400 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== RESOURCES PREVIEW (Cost Calculator Teaser) ============== */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Instant Estimation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Know Your Numbers <span className="text-amber-400">Before You Build.</span>
              </h2>
              <p className="text-slate-400 mb-6">
                Don't wait weeks for a quote. Get a rough order of magnitude (ROM) estimate instantly based on current 2025 market rates for materials and labor in Dubai.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Interactive Cost Calculator</p>
                    <p className="text-slate-400 text-sm">Villa, Commercial, or Warehouse</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Material Specifications (AVL)</p>
                    <p className="text-slate-400 text-sm">Approved vendor list with no substitutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">40+ Full-Time Employees</p>
                    <p className="text-slate-400 text-sm">Own fleet, machinery & manpower visas</p>
                  </div>
                </div>
              </div>

              <Link to="/resources">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
                  Use Cost Calculator
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Right - Material Spec Preview */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 text-xs font-mono">MATERIAL_SPECS_V.2025</span>
                  <h3 className="text-white font-bold text-lg mt-1">No-Equivalent Policy</h3>
                </div>
                <Lock className="w-5 h-5 text-amber-400" />
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
                    {materialSpecs[0].items.slice(0, 4).map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-3"><p className="text-slate-300 text-sm">{item.component}</p></td>
                        <td className="py-3"><p className="text-amber-400 text-sm font-medium">{item.brand}</p></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-medium">All Specifications Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS PREVIEW (from Contact) ============== */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Client Voices</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Don't Chase Contracts. <span className="text-amber-400">We Chase Referrals.</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-slate-400 text-sm">Based on 150+ projects</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Read All Reviews & FAQ
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== TEAM PREVIEW (from About) ============== */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">The Core Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              No Salesmen. <span className="text-amber-400">Just Engineers.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              When you work with ABSB, you get raw technical expertise from the people who will actually be on your site.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-amber-500/30 transition-all">
                <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30 mb-4">
                  <span className="text-amber-400 text-2xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs italic">"{member.quote}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                Meet Full Team & Org Chart
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Open Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to <span className="text-amber-400">Break Ground?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Get your free technical survey with response time under 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-10 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-10 py-6 text-lg">
                <Calculator className="mr-2 w-5 h-5" />
                Calculate Cost First
              </Button>
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Or call directly: <a href={`tel:${companyInfo.phone}`} className="text-amber-400 hover:underline">{companyInfo.phone}</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
