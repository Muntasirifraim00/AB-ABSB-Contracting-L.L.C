import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs, companyInfo } from '../data/mock';

const FAQSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Clear Answers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Uncertainty is Expensive.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Clarity is Free.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Before you sign any contract—with us or anyone else—make sure you have the answers to these critical questions. We believe in radical transparency.
          </p>
        </div>

        {/* FAQ Accordion */}
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <p className="text-slate-300 text-sm mb-6">Speak directly to a Senior Engineer, not a salesperson.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Or WhatsApp Us Instantly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
