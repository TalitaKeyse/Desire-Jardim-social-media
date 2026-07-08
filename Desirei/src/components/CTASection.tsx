import React from "react";
import { MessageCircle, ShieldCheck, Zap, Award } from "lucide-react";
import { WHATSAPP_LINK } from "../data";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-dark-card relative overflow-hidden border-t border-white/[0.04]">
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-bronze/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/20 px-3.5 py-1.5 rounded-full">
            <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-brand-gold">
              ✦ O próximo passo para a elite digital
            </span>
          </div>

          {/* Slogan Title */}
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Sua marca está pronta para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic font-serif font-normal">
              se tornar inesquecível?
            </span>
          </h2>

          {/* Slogan description */}
          <p className="font-sans font-light text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Não espere o algoritmo melhorar por conta própria ou seus concorrentes dominarem todo o seu nicho. Vamos desenhar uma estratégia única para elevar o nível das suas redes sociais e atrair contatos reais de negócios qualificados.
          </p>

          {/* Persuasive Call to Action WhatsApp Card */}
          <div className="max-w-md mx-auto pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-8 py-5 rounded-full text-sm font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 box-glow hover:scale-[1.03]"
            >
              <MessageCircle className="w-5.5 h-5.5 mr-3 fill-brand-dark" />
              <span>Garantir minha vaga estratégica</span>
            </a>
            <p className="text-[10px] font-sans text-gray-500 mt-3">
              ✦ Atendimento individualizado. Vagas de assessoria mensal estritamente limitadas para garantir exclusividade e foco absoluto.
            </p>
          </div>

          {/* Triple guarantee credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/[0.05] max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">Acordo Confiável</h4>
              <p className="font-sans text-[11px] text-gray-400">Contratos transparentes com relatórios detalhados mensais.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-brand-gold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">Entrega Ágil</h4>
              <p className="font-sans text-[11px] text-gray-400">Estratégia e cronograma estruturados logo nas primeiras semanas.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-brand-gold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">Padrão Boutique</h4>
              <p className="font-sans text-[11px] text-gray-400">Cada marca recebe atenção personalizada com design artesanal de alto nível.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
