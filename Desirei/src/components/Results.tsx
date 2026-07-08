import React, { useState } from "react";
import { METRICS, FEED_PRESETS, WHATSAPP_LINK } from "../data";
import { MessageCircle, Heart, Eye, ArrowUpRight, Grid, EyeOff, Layout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import fotoDesiree from "../assets/images/foto2.jpeg";

export default function Results() {
  const [selectedPresetId, setSelectedPresetId] = useState("minimalista");
  const activePreset = FEED_PRESETS.find((p) => p.id === selectedPresetId) || FEED_PRESETS[0];

  return (
    <section id="diferenciais" className="py-24 bg-brand-dark-card border-y border-white/[0.04] relative overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-bronze/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
            <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-brand-gold">
              ✦ Resultados Provados
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Metodologia que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic font-serif font-normal">
              Gera Números e Autoridade
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Não medimos sucesso apenas por likes. Entregamos alcance qualificado, aumento de faturamento e desejo imediato para sua marca.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-brand-dark border border-white/[0.04] text-center space-y-2 relative group overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-gold/10 to-brand-bronze/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="font-display font-black text-4xl sm:text-5xl text-brand-gold tracking-tight gold-glow">
                {metric.value}
              </div>
              <div className="font-sans font-bold text-sm text-white">
                {metric.label}
              </div>
              <p className="font-sans font-light text-xs text-gray-400 leading-relaxed pt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive App Showcase: Simulador de Feed Premium */}
        <div className="bg-brand-dark border border-white/[0.05] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-sans font-extrabold tracking-[0.2em] text-brand-gold flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5" />
                  Simulador de Feed Premium
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                  Como seria a estética do seu negócio?
                </h3>
                <p className="font-sans font-light text-sm text-gray-400 leading-relaxed">
                  Toque nos botões abaixo para simular diferentes direções de arte e linhas editoriais visuais. Mostramos como adaptamos paletas de cores, pautas de conteúdo e tipografias para a essência do seu nicho profissional.
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                {FEED_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPresetId(preset.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPresetId === preset.id
                        ? "bg-brand-dark-light border-brand-gold text-white box-glow"
                        : "bg-white/[0.01] border-white/[0.04] text-gray-400 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="font-sans font-bold text-sm sm:text-base">
                        {preset.name}
                      </div>
                      <div className="text-[11px] font-sans opacity-70 mt-0.5 line-clamp-1">
                        {preset.tagline}
                      </div>
                    </div>
                    {selectedPresetId === preset.id && (
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.05] space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-sans text-gray-400 uppercase tracking-wider">Paleta Sugerida:</span>
                  <div className="flex space-x-1.5">
                    {activePreset.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-sans text-gray-500">
                  ✦ Garantimos harmonia de cores em blocos de 3, 6 ou 9 posts simultâneos.
                </p>
              </div>
            </div>

            {/* Right Feed Grid View (Visual Mockup of Instagram Feed) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[480px] bg-brand-dark-light rounded-2xl border border-white/[0.08] shadow-2xl p-4 overflow-hidden relative">
                
                {/* Simulated Header inside Phone Grid */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full border border-brand-gold overflow-hidden bg-brand-dark">
                      <img
                        src={fotoDesiree}
                        alt="Desireé Portrait"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-sans font-extrabold text-white flex items-center gap-1">
                        @seu.perfil.premium
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full text-white text-[7px] flex items-center justify-center font-bold" title="Verificado">✓</span>
                      </div>
                      <div className="text-[9px] font-sans text-brand-gold font-medium uppercase tracking-wider">Posicionado por Desireé Jardim</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                </div>

                {/* Subheading status */}
                <div className="flex justify-around py-1.5 bg-white/[0.02] rounded-lg text-center mb-4 text-[10px] font-sans">
                  <div>
                    <span className="block font-bold text-white text-xs">154</span>
                    <span className="text-gray-500">posts</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">28.4k</span>
                    <span className="text-gray-500 font-medium">seguidores</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">912</span>
                    <span className="text-gray-500">potenciais clientes</span>
                  </div>
                </div>

                {/* Grid of Feed Posts */}
                <div className="grid grid-cols-3 gap-2">
                  <AnimatePresence mode="wait">
                    {activePreset.posts.map((post, idx) => (
                      <motion.div
                        key={`${activePreset.id}-${idx}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="aspect-square rounded-lg p-2.5 flex flex-col justify-between relative group/post overflow-hidden cursor-pointer"
                        style={{
                          backgroundColor: idx % 3 === 0 ? activePreset.colors[0] : idx % 3 === 1 ? activePreset.colors[3] || "#1e1b18" : activePreset.colors[1],
                          border: `1px solid ${idx % 3 === 1 ? activePreset.colors[1] + "20" : "rgba(255,255,255,0.04)"}`
                        }}
                      >
                        {/* Categories / Badges */}
                        <span 
                          className="text-[7px] uppercase font-sans font-bold tracking-widest px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: idx % 3 === 1 ? "rgba(255,255,255,0.1)" : "rgba(207, 168, 100, 0.15)",
                            color: idx % 3 === 1 ? "#ffffff" : "#cfa864"
                          }}
                        >
                          {post.category}
                        </span>

                        {/* Title text */}
                        <div 
                          className={`text-[8px] sm:text-[10px] font-display leading-[1.25] tracking-tight line-clamp-4 ${
                            idx % 3 === 1 ? "text-brand-gold font-bold" : idx % 3 === 0 ? "text-white font-medium" : "text-brand-dark font-black"
                          }`}
                        >
                          {post.title}
                        </div>

                        {/* Visual statistics on bottom bar */}
                        <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] opacity-50">
                          <span className="text-[6px] font-sans text-gray-400">✦ Premium</span>
                          <span className="text-[6px] font-mono text-gray-400 flex items-center gap-0.5">
                            <Eye className="w-2 h-2 text-brand-gold" />
                            {post.views}
                          </span>
                        </div>

                        {/* Hover Overlay effect */}
                        <div className="absolute inset-0 bg-brand-dark/90 opacity-0 group-hover/post:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center space-y-1.5">
                          <span className="text-[9px] text-brand-gold uppercase font-sans font-bold tracking-widest">Conteúdo Estratégico</span>
                          <p className="text-[7px] text-gray-300 font-sans leading-relaxed">Criado especificamente para converter leads</p>
                          <div className="flex space-x-1.5 text-[8px] text-white font-sans items-center">
                            <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />
                            <span>Alto Engajamento</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Simulated Overlay of conversion action */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-sans text-gray-400">
                  <div className="flex items-center gap-1">
                    <Grid className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Estilo Visual de Boutique</span>
                  </div>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold font-bold flex items-center gap-0.5 hover:underline"
                  >
                    Quero um feed assim
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
