import React from "react";
import { Compass, Sparkles, Palette, TrendingUp, CheckCircle, MessageCircle, Video } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "../data";
import { motion } from "motion/react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Sparkles: Sparkles,
  Palette: Palette,
  TrendingUp: TrendingUp,
  Video: Video,
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-gold/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-bronze/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
            <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-brand-gold">
              ✦ Como transformamos marcas
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Nossos Serviços & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic font-serif font-normal">
              Pilares de Crescimento
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Uma marca forte necessita de equilíbrio entre inteligência analítica e expressão estética de alto impacto. Nós cuidamos de toda a cadeia de valor.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-brand-dark-card border border-white/[0.04] hover:border-brand-gold/20 transition-all duration-500 hover:translate-y-[-4px] box-glow-hover"
              >
                {/* Glow node behind icon on hover */}
                <div className="absolute -top-1 -left-1 w-20 h-20 bg-brand-gold/10 rounded-br-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-6">
                  {/* Service Icon Banner */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl bg-brand-dark flex items-center justify-center border border-white/[0.08] group-hover:border-brand-gold/30 text-brand-gold group-hover:text-brand-gold-light transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-sans font-extrabold tracking-widest text-white/20 group-hover:text-brand-gold/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Slogan */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-brand-gold-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans font-light text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points detailing the service */}
                  <div className="pt-4 border-t border-white/[0.05] space-y-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-gray-300 font-light">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-sans font-bold text-brand-gold group-hover:text-white transition-colors"
                  >
                    <span>Quero contratar este pilar</span>
                    <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Banner underneath */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-brand-dark-light to-brand-dark-card border border-white/[0.06] rounded-2xl p-8 md:p-10 text-center space-y-6 max-w-4xl mx-auto"
        >
          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
            Deseja uma assessoria completa cobrindo todos os pilares?
          </h3>
          <p className="font-sans font-light text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Trabalhamos com pacotes completos de Gestão e Posicionamento (Full-Service Social Media), liberando 100% do seu tempo de planejamento para focar estritamente no seu atendimento e vendas de produtos.
          </p>
          <div className="flex justify-center pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 box-glow"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-brand-dark" />
              <span>Contratar Assessoria Completa</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
