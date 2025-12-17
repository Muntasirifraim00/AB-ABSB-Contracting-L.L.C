import React, { useState } from 'react';
import { MapPin, Building, Users, TrendingUp } from 'lucide-react';
import { Progress } from './ui/progress';
import { projects } from '../data/mock';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [filter, setFilter] = useState('all');

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Operational Map</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Landmarks.</span>
          </h2>
        </div>

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
              {/* Project Image Placeholder */}
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
  );
};

export default ProjectsSection;
