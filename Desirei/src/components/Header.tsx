import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/85 backdrop-blur-md border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer group flex flex-col"
          >
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-brand-gold transition-colors duration-300">
              DESIREÉ JARDIM
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-brand-gold font-medium mt-0.5">
              Social Media & Videomaker Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["inicio", "sobre", "servicos", "diferenciais", "faq"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="text-sm font-sans text-gray-400 hover:text-brand-gold transition-colors duration-300 capitalize cursor-pointer font-medium"
              >
                {sec === "servicos" ? "Serviços" : sec === "inicio" ? "Início" : sec === "sobre" ? "Quem Sou Eu" : sec}
              </button>
            ))}
          </nav>

          {/* CTA & Status Indicator */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full text-xs text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-sans font-medium text-[11px] tracking-wide uppercase text-emerald-400">Vagas Abertas</span>
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 overflow-hidden group box-glow hover:scale-[1.03]"
            >
              <MessageCircle className="w-4.5 h-4.5 mr-2 fill-brand-dark" />
              <span>Fazer Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-full text-[10px] text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="font-sans font-medium uppercase tracking-wider">Ativa</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-brand-gold transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] bg-brand-dark z-40 transition-all duration-300 border-t border-white/[0.06] ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto visible"
            : "translate-x-full opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col space-y-6 p-8 h-full">
          {["inicio", "sobre", "servicos", "diferenciais", "faq"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-left text-lg font-display text-gray-300 hover:text-brand-gold transition-colors duration-300 capitalize py-2 border-b border-white/[0.03]"
            >
              {sec === "servicos" ? "Serviços" : sec === "inicio" ? "Início" : sec === "sobre" ? "Quem Sou Eu" : sec}
            </button>
          ))}
          <div className="pt-6 flex flex-col space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-light text-center transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-brand-dark" />
              <span>Falar com Desireé</span>
            </a>
            <p className="text-center text-xs text-gray-500 font-sans">
              ✦ Transforme suas redes sociais hoje mesmo.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
