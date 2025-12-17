import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Building, Wrench, HardHat, Settings, CheckCircle, MessageCircle, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { companyInfo, faqs, testimonials } from '../data/mock';

const ContactPage = () => {
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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Open Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Break Ground?</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              You have the vision. We have the engineering. Let's merge them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-slate-400">Visit our HQ in Al Qusais or send us your initial requirements.</p>
              </div>

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

              {/* Response Time */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-amber-400 font-medium text-sm">Fast Response Guaranteed</p>
                <p className="text-slate-400 text-sm">Our engineers respond within 2 hours during business hours.</p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
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
                            <Icon className={`w-4 h-4 ${formData.projectType === type.id ? 'text-amber-400' : 'text-slate-400'}`} />
                            <span className={`text-xs ${formData.projectType === type.id ? 'text-amber-400' : 'text-slate-300'}`}>{type.label}</span>
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

      {/* Testimonials */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Client Voices</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Don't Chase Contracts. <span className="text-amber-400">We Chase Referrals.</span>
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="text-white font-bold">4.9 <span className="text-slate-400 font-normal text-sm">Average Rating</span></p>
                <p className="text-slate-500 text-xs">Based on 150+ completed projects</p>
              </div>
              <Button variant="link" className="text-amber-400 p-0 h-auto text-sm">
                Read Google Reviews <ExternalLink className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, idx) => (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Clear Answers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Uncertainty is Expensive. <span className="text-amber-400">Clarity is Free.</span>
            </h2>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-slate-700/50 rounded-xl px-6 data-[state=open]:border-amber-500/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-white hover:text-amber-400 py-5 text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Still have questions?</p>
            <p className="text-slate-300 text-sm mb-6">Speak directly to a Senior Engineer, not a salesperson.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-6" onClick={() => window.location.href = `tel:${companyInfo.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Or Call Us Directly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
