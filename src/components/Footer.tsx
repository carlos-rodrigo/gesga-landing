"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-verde-profundo py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blanco/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href="#"
            className="font-[var(--font-manrope)] text-3xl sm:text-4xl font-bold text-blanco tracking-tight mb-3"
          >
            GEMSA
          </a>
          <p className="text-blanco/70 text-lg mb-2">
            Diagnóstico ganadero impulsado por IA
          </p>
          <p className="text-blanco/50 text-sm mb-6">Argentina</p>
          <div className="w-16 h-px bg-blanco/20 mb-6" />
          <p className="text-blanco/40 text-sm">
            © 2024 GEMSA. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
