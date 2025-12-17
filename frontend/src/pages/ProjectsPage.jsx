import React, { useState } from 'react';
import { MapPin, Building, Eye, Ruler, Palette, FileCheck, ArrowRight } from 'lucide-react';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { projects } from '../data/mock';

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Our Projects</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Landmarks.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of luxury villas, commercial buildings, and infrastructure projects across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'Running', 'Completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  filter === f
                    ? 'bg-amber-500 text-slate-900 font-medium'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {f === 'Running' && <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />}
                {f === 'Completed' && <div className="w-2 h-2 bg-slate-400 rounded-full" />}
                {f === 'all' ? 'All Projects' : f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`cursor-pointer bg-slate-800/30 hover:bg-slate-800/60 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeProject.id === project.id
                    ? 'border-amber-500/50 ring-2 ring-amber-500/20'
                    : 'border-slate-700/50 hover:border-amber-500/30'
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-slate-600" />
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                      <span className="text-emerald-400 text-xs font-medium">Active</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-sm font-bold">0{project.id}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-400 text-xs">Construction Status</span>
                    <span className="text-amber-400 text-xs font-bold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-1 mb-4 bg-slate-700" />
                  
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Location</span>
                      <span className="text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {project.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Consultant</span>
                      <span className="text-slate-300">{project.consultant}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Main Contractor</span>
                      <span className="text-slate-300">{project.contractor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Integrity Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <Eye className="w-10 h-10 text-amber-400" />
                      </div>
                      <p className="text-slate-400 text-sm">Villa Al Khawaneej Project</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 px-4 py-2 rounded-lg">
                    <span className="text-amber-400 text-2xl font-bold">50%</span>
                    <p className="text-slate-400 text-xs">Completion Status</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={50} className="h-2 bg-slate-700" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Visual Integrity</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  We Build What <span className="text-amber-400">We Promise.</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  The gap between our architectural renders and the final handover is zero.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Ruler className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pixel-Perfect Execution</h4>
                    <p className="text-slate-400 text-sm">Our site engineers use the 3D renders as the "Bible" for construction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Palette className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Material Fidelity</h4>
                    <p className="text-slate-400 text-sm">The marble you approve is the marble you get on the floor.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">No "Site Adjustments"</h4>
                    <p className="text-slate-400 text-sm">We measure twice and cut once, preserving the architect's original vision.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
          <p className="text-slate-400 mb-8">Download our complete portfolio with detailed case studies.</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
            Download Portfolio (PDF)
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
