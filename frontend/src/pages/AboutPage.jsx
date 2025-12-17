import React from 'react';
import { Shield, Handshake, CheckCircle, Quote, ArrowRight, Briefcase, Clock, Sparkles, FileText, Zap, BadgeCheck, HardHat, Link as LinkIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  engineeringPartners, 
  executionPartners, 
  companyInfo,
  whyChooseFeatures,
  comparisonData,
  contractualGuarantees,
  licenses,
  dualLicensingBenefits,
  teamMembers,
  orgChart
} from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">About ABSB</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We Don't Just Build Structures.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">We Engineer Legacies.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              In a market flooded with contractors, we are your strategic partners. We bridge the gap between architectural dreams and structural reality with zero compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose ABSB */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Leading Investors Choose ABSB</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">The "Zero-Delay" Promise</h3>
                  <p className="text-slate-400 text-sm">Time is money. Our rigorous project management protocols allow us to hit milestones with military precision.</p>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <span className="text-5xl font-bold text-amber-400">98%</span>
                <span className="text-slate-400 text-sm ml-2">Projects Delivered On Schedule</span>
              </div>
            </div>

            <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Uncompromising Finish</h3>
                  <p className="text-slate-400 text-sm">From marble alignment to joinery gaps, we obsess over the millimeters you don't see.</p>
                </div>
              </div>
              <div className="h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                <p className="text-amber-400 text-sm font-medium">Pixel-Perfect Execution</p>
              </div>
            </div>

            <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Transparent Pricing</h3>
                  <p className="text-slate-400 text-sm">No hidden clauses. We provide detailed BOQs so you know exactly where every Dirham goes.</p>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                  Request a Sample Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl p-8 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Smart MEP Integration</h3>
                  <p className="text-slate-400 text-sm">We don't just lay pipes; we optimize energy flow. Our MEP solutions reduce long-term operational costs.</p>
                </div>
              </div>
              <Link to="/services">
                <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                  View MEP Capabilities <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300 text-sm">Verified Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vetted by Giants. <span className="text-amber-400">Trusted by the Best.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We don't just bid on projects; we are invited to them. Our operational standards meet the rigorous demands of Dubai's elite.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">THE VETTING AUTHORITY</p>
                  <h3 className="text-white font-semibold text-lg">Engineering Approval</h3>
                </div>
              </div>
              <div className="space-y-4">
                {engineeringPartners.map((partner) => (
                  <div key={partner.id} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-xl p-5 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">{partner.id}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{partner.name}</h4>
                        <p className="text-slate-400 text-xs">{partner.role}</p>
                        <p className="text-amber-400 text-xs mt-2">Clearance: {partner.clearance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">STRATEGIC ALLIANCES</p>
                  <h3 className="text-white font-semibold text-lg">Execution Partners</h3>
                </div>
              </div>
              <div className="space-y-4">
                {executionPartners.map((partner) => (
                  <div key={partner.id} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-xl p-5 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">{partner.id}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{partner.name}</h4>
                        <p className="text-slate-400 text-xs">{partner.role}</p>
                        <p className="text-amber-400 text-xs mt-2">Collaboration: {partner.collaboration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-slate-400 text-sm">Registered Sub-Contractor ID: </span>
            <span className="text-amber-400 font-mono font-semibold">{companyInfo.subContractorId}</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">The Core Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              No Salesmen. <span className="text-amber-400">Just Engineers.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30">
                    <span className="text-amber-400 text-2xl font-bold">{member.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl">{member.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{member.role}</p>
                  <div className="flex items-start gap-2 pt-4 border-t border-slate-700/50">
                    <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm italic">"{member.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Org Chart */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Corporate Governance</h3>
            <p className="text-slate-400 mt-2">A rigid chain of command ensures every decision is strategic.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-amber-500/20 border border-amber-500/40 rounded-xl p-6 text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-amber-500/30 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-400 font-bold text-lg">{orgChart.head.initials}</span>
              </div>
              <h4 className="text-white font-bold">{orgChart.head.name}</h4>
              <p className="text-amber-400 text-sm">{orgChart.head.role}</p>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="w-full grid md:grid-cols-3 gap-6">
              {orgChart.departments.map((dept, deptIdx) => (
                <div key={deptIdx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <div className="space-y-3">
                    {dept.map((person, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          <span className="text-amber-400 text-xs font-bold">{person.initials}</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{person.name}</p>
                          <p className="text-slate-400 text-xs">{person.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300">Are you an Engineer?</span>
              <Button variant="link" className="text-amber-400 p-0 h-auto">View Career Openings <ArrowRight className="ml-1 w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Licenses */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Legal Authority</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dual Licensed. <span className="text-amber-400">Total Coverage.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {licenses.map((license, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-amber-400" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-emerald-400 text-xs font-medium">VERIFIED</span>
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{license.type}</h4>
                <p className="text-slate-500 text-xs font-mono mb-3">LICENSE NO: {license.licenseNo}</p>
                <p className="text-amber-400 text-sm">{license.approval}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {dualLicensingBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <HardHat className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">HSE Protocol V.2.0</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zero Accidents. <span className="text-emerald-400">Zero Compromise.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-emerald-400 mb-2">50,000+</p>
              <p className="text-slate-400">Safe Man-Hours</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-emerald-400 mb-2">100%</p>
              <p className="text-slate-400">PPE Compliance</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center">
              <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Fully Insured</p>
              <p className="text-slate-400 text-sm mt-1">CAR Policy Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to work with the best?</h2>
          <Link to="/contact">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
