"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatIsGesga() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Qué es GESGA
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg sm:text-xl text-grafito/80 leading-relaxed"
        >
          <p>
            GESGA es un servicio de diagnóstico técnico-económico integral
            orientado a establecimientos agropecuarios de escala comercial.
          </p>
          <p>
            Analizamos el sistema productivo en su conjunto —ganadero y
            agrícola— integrando indicadores técnicos, resultados económicos y
            estructura de capital, con el objetivo de entender cómo se generan
            los resultados del negocio y dónde se pierde eficiencia.
          </p>
          <p className="font-medium text-verde-profundo">
            No se trata de sumar más información, sino de ordenarla,
            interpretarla y transformarla en decisiones concretas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
