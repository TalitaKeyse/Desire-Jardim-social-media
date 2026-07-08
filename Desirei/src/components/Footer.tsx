import React from "react";
import { MessageCircle, Instagram, ArrowUp } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.04]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                DESIREÉ JARDIM
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-brand-gold font-medium mt-0.5">
                Social Media Premium
              </span>
            </div>
            <p className="font-sans font-light text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Posicionamento estratégico, narrativas proprietárias e direção de arte sofisticada para marcas, mentores e profissionais liberais de alto padrão.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-1">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-brand-gold/50 flex items-center justify-center text-gray-400 hover:text-brand-gold transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/desireejardim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-brand-gold/50 flex items-center justify-center text-gray-400 hover:text-brand-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs font-sans">
              {[
                { name: "Início", id: "inicio" },
                { name: "Sobre", id: "sobre" },
                { name: "Serviços", id: "servicos" },
                { name: "Diferenciais", id: "diferenciais" },
                { name: "FAQ", id: "faq" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Slogan details / Legal note */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">Contato & Localização</h4>
            <ul className="space-y-2 text-xs font-sans text-gray-400">
              <li>
                <span className="text-white font-medium">WhatsApp:</span> +55 (61) 98424-6995
              </li>
              <li>
                <span className="text-white font-medium">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/desireejardim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline transition-all font-semibold"
                >
                  @desireejardim
                </a>
              </li>
              <li>
                <span className="text-white font-medium">Atendimento:</span> Marcas nacionais e internacionais (remoto / Brasília-DF)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-sans text-gray-500">
          <div className="text-center sm:text-left">
            <p>© {currentYear} Desireé Jardim — Todos os direitos reservados.</p>
            <p className="mt-1 opacity-70">Design de Alta Conversão & Posicionamento de Elite.</p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <span className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] group-hover:border-brand-gold/50 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
