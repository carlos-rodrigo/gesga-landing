"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  "Dashboard de KPIs técnicos y económicos del establecimiento.",
  "Márgenes por actividad (cría, recría, engorde, agricultura).",
  "Resultado global de la empresa y análisis de rentabilidad del capital.",
  "Diagnóstico integrado del funcionamiento del sistema.",
  "Plan de mejoras personalizado, diseñado en función de los objetivos, prioridades y ambiciones del productor, reconociendo que cada establecimiento es un sistema único.",
  "Escenarios de mejora productiva y económica, con evaluación de impacto, riesgos y retornos esperados.",
];

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="que-entregamos" className="py-20 sm:py-28 bg-arena relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Qué entregamos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex items-start gap-4 p-5 sm:p-6 bg-blanco rounded-xl border border-verde-profundo/5 hover:shadow-md hover:border-verde-acento/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-verde-acento" />
              </div>
              <p className="text-grafito leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-lg sm:text-xl text-verde-profundo font-medium"
        >
          No trabajamos con recomendaciones genéricas: las propuestas se
          construyen a medida de cada campo y de cada proyecto productivo.
        </motion.p>
      </div>
    </section>
  );
}
