import React, { useRef, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { testimonials, supplyPartners } from '../data/mock';

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Don't Chase Contracts.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">We Chase Referrals.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            In an industry built on reputation, ours is ironclad. See why leading developers and homeowners across Dubai trust ABSB with their vision.
          </p>
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
              <p className="text-white font-bold">4.9 <span className="text-slate-400 font-normal text-sm">Average Client Rating</span></p>
              <p className="text-slate-500 text-xs">Based on 150+ completed projects</p>
            </div>
            <Button variant="link" className="text-amber-400 p-0 h-auto text-sm">
              Read Google Reviews
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          <div className="flex gap-2 justify-end mb-4">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all snap-center"
              >
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

        {/* CTA */}
        <div className="text-center mb-20">
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6">
            Start Your Success Story
          </Button>
        </div>

        {/* Supply Chain Partners */}
        <div>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-2">Our Supply Chain</p>
            <h3 className="text-2xl font-bold text-white">Powered by the World's Best</h3>
            <p className="text-slate-400 text-sm mt-2">
              We don't cut corners on materials. We partner with industry giants to ensure your build lasts a lifetime.
            </p>
          </div>

          {/* Partners Marquee */}
          <div className="overflow-hidden py-8">
            <div className="animate-marquee-slow whitespace-nowrap flex items-center gap-16">
              {[...supplyPartners, ...supplyPartners, ...supplyPartners].map((partner, idx) => (
                <span key={idx} className="text-2xl font-bold text-slate-600 hover:text-slate-400 transition-colors">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
