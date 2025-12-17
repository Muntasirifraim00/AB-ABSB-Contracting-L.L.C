import React from 'react';
import { Quote, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { teamMembers, orgChart } from '../data/mock';

const TeamSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">The Core Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            No Salesmen.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Just Engineers.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            When you work with ABSB, you don't get a polished sales pitch. You get raw technical expertise from the people who will actually be on your site.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300">
              {/* Avatar Area */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30">
                  <span className="text-amber-400 text-2xl font-bold">{member.initials}</span>
                </div>
                {/* Tab Switchers */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="px-2 py-1 bg-slate-900/80 rounded text-xs text-slate-400">Corporate Profile</span>
                  <span className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-400">On Site Profile</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                    {idx === 0 ? 'Civil Lead' : idx === 1 ? 'MEP Head' : 'Interiors'}
                  </p>
                  <h3 className="text-white font-bold text-xl">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <p className="text-amber-400 font-bold text-lg">
                      {member.experience || member.certification || member.award}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {member.experience ? 'Years Exp.' : member.certification ? 'Certified' : 'Award Winner'}
                    </p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <p className="text-amber-400 font-bold text-lg">
                      {member.projects || member.approval || member.fitouts}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {member.projects ? 'Villas Built' : member.approval ? 'Approval Rate' : 'Luxury Fitouts'}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex items-start gap-2 pt-4 border-t border-slate-700/50">
                  <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm italic">"{member.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career CTA */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <span className="text-slate-300">Are you an Engineer?</span>
            <span className="text-slate-500">We are always looking for top talent in Dubai.</span>
            <Button variant="link" className="text-amber-400 p-0 h-auto">
              View Career Openings
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Org Chart */}
        <div>
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Corporate Governance</p>
            <h3 className="text-3xl font-bold text-white">
              The Neural Network
            </h3>
            <p className="text-slate-400 mt-2">
              A rigid chain of command ensures that every decision is strategic, and every execution is accountable.
            </p>
          </div>

          {/* Org Chart Visual */}
          <div className="flex flex-col items-center">
            {/* MD */}
            <div className="bg-amber-500/20 border border-amber-500/40 rounded-xl p-6 text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-amber-500/30 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-400 font-bold text-lg">{orgChart.head.initials}</span>
              </div>
              <h4 className="text-white font-bold">{orgChart.head.name}</h4>
              <p className="text-amber-400 text-sm">{orgChart.head.role}</p>
              <p className="text-slate-400 text-xs mt-2 italic">"{orgChart.head.quote}"</p>
            </div>

            {/* Connecting Line */}
            <div className="w-px h-8 bg-slate-700" />

            {/* Departments */}
            <div className="w-full grid md:grid-cols-3 gap-6">
              {orgChart.departments.map((dept, deptIdx) => (
                <div key={deptIdx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <div className="space-y-3">
                    {dept.map((person, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
