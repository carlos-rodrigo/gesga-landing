"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustBullets = [
  "Para dueños y administradores",
  "Enfoque práctico y accionable",
  "Plan 30/60/90 días",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-arena pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-verde-profundo/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-verde-acento/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-verde-profundo"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[var(--font-manrope)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-verde-profundo leading-[1.1] tracking-tight"
        >
          Diagnóstico ganadero y plan de mejoras{" "}
          <span className="relative inline-block">
            impulsado por IA
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-verde-acento/20 -rotate-1" />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-grafito/80 max-w-3xl mx-auto leading-relaxed"
        >
          GEMSA evalúa el desempeño productivo y de manejo de tu
          establecimiento, detecta oportunidades y entrega un plan priorizado
          para mejorar resultados.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blanco bg-verde-acento rounded-full hover:bg-verde-profundo transition-all duration-200 shadow-lg shadow-verde-acento/25 hover:shadow-verde-profundo/25 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2"
          >
            Solicitar demo
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-verde-profundo border-2 border-verde-profundo/20 rounded-full hover:border-verde-profundo/40 hover:bg-verde-profundo/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-profundo focus-visible:ring-offset-2"
          >
            Ver qué incluye
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {trustBullets.map((bullet, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-grafito/70"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-verde-acento/10">
                <Check className="w-3 h-3 text-verde-acento" />
              </span>
              <span className="text-sm sm:text-base">{bullet}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
