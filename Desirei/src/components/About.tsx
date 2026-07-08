import React from "react";
import { Award, Target, Flame, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: "Método Totalmente Intencional",
      description: "Esqueça publicações vazias ou sem propósito. Cada palavra, imagem e stories segue uma rota de consciência desenhada para transformar seguidores em clientes."
    },
    {
      icon: Award,
      title: "Padrão Estético de Elite",
      description: "Profissionais de excelência não combinam com designs amadores. Desenvolvemos uma linha visual que projeta sofisticação imediata e gera diferenciação."
    },
    {
      icon: Flame,
      title: "Especialista em Vendas de Alto Ticket",
      description: "Focamos em posicionar marcas para que possam cobrar o que realmente valem, atraindo leads qualificados que valorizam a entrega em vez de negociar preço."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark-card border-y border-white/[0.04] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-gold/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-bronze/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Column 1: Narrative & Quote */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-brand-gold">
                ✦ Por trás da estratégia
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Eu não crio posts. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light italic font-serif font-normal">
                  Crio desejo e autoridade.
                </span>
              </h2>
            </div>

            <div className="relative border-l-2 border-brand-gold pl-6 py-1 italic font-serif text-lg sm:text-xl text-gray-300 leading-relaxed">
              &ldquo;No mercado premium, as pessoas não compram o seu serviço porque precisam dele. Elas compram porque desejam a sua atmosfera, a sua segurança e a sua excelência. O meu papel é externalizar o seu gênio nas redes sociais.&rdquo;
              <span className="block mt-3 text-xs font-sans not-italic font-bold tracking-wider text-brand-gold uppercase">— DESIREÉ JARDIM</span>
            </div>

            <p className="font-sans font-light text-gray-400 text-sm sm:text-base leading-relaxed">
              Olá, sou a Desireé Jardim. Como estrategista de posicionamento digital e social media, dedico minha carreira a resgatar profissionais de elite da invisibilidade algorítmica. 
              Acredito que feeds genéricos destroem negócios lucrativos todos os dias. Por isso, criei um método voltado para quem deseja ser a única opção viável no mercado de alto padrão — unindo narrativa magnética, design sofisticado e intenção comercial cirúrgica.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="bg-brand-dark px-4 py-3 rounded-lg border border-white/[0.05] text-center min-w-[120px]">
                <div className="text-2xl font-display font-black text-white">100%</div>
                <div className="text-[10px] uppercase font-sans text-brand-gold tracking-widest font-medium mt-1">Autoridade</div>
              </div>
              <div className="bg-brand-dark px-4 py-3 rounded-lg border border-white/[0.05] text-center min-w-[120px]">
                <div className="text-2xl font-display font-black text-white">Premium</div>
                <div className="text-[10px] uppercase font-sans text-brand-gold tracking-widest font-medium mt-1">Design</div>
              </div>
              <div className="bg-brand-dark px-4 py-3 rounded-lg border border-white/[0.05] text-center min-w-[120px]">
                <div className="text-2xl font-display font-black text-white">+Faturamento</div>
                <div className="text-[10px] uppercase font-sans text-brand-gold tracking-widest font-medium mt-1">Objetivo</div>
              </div>
            </div>
          </div>

          {/* Column 2: Details and Highlights List */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-xl text-white pb-3 border-b border-white/[0.06]">
              Os Pilares de nossa Atuação de Elite
            </h3>
            
            <div className="space-y-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex gap-4 p-5 rounded-xl bg-brand-dark hover:bg-brand-dark-light border border-white/[0.04] hover:border-brand-gold/10 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-base text-white">
                        {item.title}
                      </h4>
                      <p className="font-sans font-light text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-start">
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold-light text-xs uppercase font-sans font-bold tracking-widest transition-colors"
              >
                <span>Explorar os Nossos Serviços</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
