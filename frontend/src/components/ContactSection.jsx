import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Building, Wrench, HardHat, Settings, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { companyInfo } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'construction',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'construction', label: 'Construction', icon: Building },
    { id: 'renovation', label: 'Renovation', icon: HardHat },
    { id: 'mep', label: 'MEP Works', icon: Wrench },
    { id: 'facility', label: 'Facility Mgmt', icon: Settings }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-800/50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Open Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Break Ground?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            You have the vision. We have the engineering. Let's merge them. Visit our HQ in Al Qusais or send us your initial requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-amber-400 mb-3" />
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Direct Line</p>
                <p className="text-white font-semibold">{companyInfo.phone}</p>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-amber-400 mb-3" />
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email Quote</p>
                <p className="text-white font-semibold text-sm">{companyInfo.email}</p>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Map Location</p>
                  <p className="text-slate-400 text-sm">Al Qusais Ind. Area</p>
                </div>
              </div>
              <div className="p-4 border-t border-slate-700/50">
                <p className="text-slate-300 text-sm">{companyInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">Project Inquiry</h3>
            <p className="text-slate-400 text-sm mb-6">Fill in the details below. Our engineers review every submission.</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="text-white font-semibold text-lg">Inquiry Submitted!</p>
                <p className="text-slate-400 text-sm">We'll contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs block mb-2">Name</label>
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs block mb-2">Company</label>
                    <Input
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs block mb-2">Phone</label>
                    <Input
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs block mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs block mb-2">Project Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type.id })}
                          className={`flex flex-col items-center gap-1 px-3 py-3 rounded-lg transition-all ${
                            formData.projectType === type.id
                              ? 'bg-amber-500/20 border-amber-500/50 border'
                              : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${
                            formData.projectType === type.id ? 'text-amber-400' : 'text-slate-400'
                          }`} />
                          <span className={`text-xs ${
                            formData.projectType === type.id ? 'text-amber-400' : 'text-slate-300'
                          }`}>{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs block mb-2">Message</label>
                  <Textarea
                    placeholder="Brief Project Description"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-6">
                  <Send className="w-5 h-5 mr-2" />
                  LAUNCH PROJECT INQUIRY
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
