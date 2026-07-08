import React, { useState } from "react";
import { FAQ_ITEMS, WHATSAPP_LINK } from "../data";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Absolute design backlights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-bronze/4 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
            <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-brand-gold">
              ✦ FAQ / Dúvidas Frequentes
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Perguntas & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic font-serif font-normal">
              Respostas Claras
            </span>
          </h2>
          <p className="text-sm text-gray-400 font-sans font-light max-w-lg mx-auto">
            Tem alguma dúvida sobre como a gestão de redes sociais pode alavancar seu negócio? Encontre as respostas abaixo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/[0.05] bg-brand-dark-card overflow-hidden transition-colors duration-300"
              >
                {/* Question Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left cursor-pointer hover:bg-white/[0.01] transition-colors focus:outline-none"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-white pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center border border-white/[0.06] text-brand-gold">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 border-t border-white/[0.03] pt-4">
                        <p className="font-sans font-light text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help block */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-dark-light border border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">Sua dúvida não está aqui?</h4>
              <p className="font-sans font-light text-xs text-gray-400">Envie diretamente para o meu WhatsApp. Respondo rápido!</p>
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2 fill-brand-dark" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
