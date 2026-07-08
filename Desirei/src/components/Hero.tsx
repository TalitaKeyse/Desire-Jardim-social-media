import React from "react";
import { MessageCircle, CheckCircle, ArrowRight, Sparkles, TrendingUp, Target } from "lucide-react";
import { WHATSAPP_LINK } from "../data";
import { motion } from "motion/react";
import fotoDesiree from "../assets/images/foto2.jpeg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-dark flex items-center min-h-[90vh]"
    >
      {/* Absolute background glowing design nodes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-bronze/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text/Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Upper Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full"
            >
              <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.2em] text-brand-gold">
                ✦ Posicionamento Digital High Ticket
              </span>
            </motion.div>

            {/* Title / Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
                Marcas que falam como{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic font-serif font-normal">
                  gente de verdade.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-xl">
                Não venda apenas serviços. Desperte desejo irracional. Traduzo sua autoridade técnica em um feed premium e intencional que atrai clientes prontos para pagar o seu valor justo.
              </p>
            </motion.div>

            {/* CTA Button and trust features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4.5 rounded-full text-sm font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 box-glow hover:scale-[1.02] text-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2.5 fill-brand-dark" />
                <span>Aplicar para Mentoria / Gestão</span>
                <ArrowRight className="w-4 h-4 ml-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center px-8 py-4.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-transparent border border-white/[0.12] hover:border-brand-gold/50 hover:bg-white/[0.02] transition-all duration-300 text-center"
              >
                Conhecer Métodos
              </a>
            </motion.div>

            {/* Small proofs beneath CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-4 border-t border-white/[0.05] max-w-lg"
            >
              {[
                "100% Intencional",
                "Estratégia sob medida",
                "Foco em High Ticket"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="font-sans font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none group"
            >
              {/* Golden neon frames behind the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 rounded-2xl" />
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-gold/30 via-brand-bronze/10 to-brand-gold/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-gold rounded-tl-xl pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-gold rounded-br-xl pointer-events-none z-20" />
              
              {/* Real Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-brand-dark-card aspect-[3/4] shadow-2xl">
                <img
                  src={fotoDesiree}
                  alt="Desireé Jardim"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Float floating brand badge on image corner */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark-card/90 backdrop-blur-md border border-white/[0.08] p-4 rounded-xl z-20 flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="font-display font-bold text-sm text-white">Desireé Jardim</h3>
                  <p className="text-[11px] text-brand-gold uppercase tracking-wider font-sans font-medium">Estrategista de Redes Sociais</p>
                </div>
                <div className="bg-brand-gold/10 px-2.5 py-1 rounded-md border border-brand-gold/20">
                  <span className="text-[10px] text-brand-gold font-sans font-semibold tracking-wider">✦ PREMIUM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
