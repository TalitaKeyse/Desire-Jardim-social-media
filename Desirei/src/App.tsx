/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 flex flex-col selection:bg-brand-gold selection:text-brand-dark">
      {/* Top sticky transparent glass-morphic header */}
      <Header />

      {/* Main vertical stack */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Sobre Desireé Jardim */}
        <About />

        {/* Section 3: Serviços e Pilares */}
        <Services />

        {/* Section 4: Resultados / Diferenciais (incluindo o Simulador de Feed) */}
        <Results />

        {/* Section 5: FAQ Accordion */}
        <FAQ />

        {/* Section 6: CTA Final Persuasivo */}
        <CTASection />
      </main>

      {/* Footer Credentials & Quick Links */}
      <Footer />
    </div>
  );
}
