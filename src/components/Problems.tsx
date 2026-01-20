"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "márgenes ajustados o inestables,",
  "rentabilidades por debajo de lo esperado,",
  "capital inmovilizado con bajo retorno,",
  "decisiones productivas sin una evaluación económica integral.",
];

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-verde-profundo relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verde-acento/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-blanco">
            Qué problema resuelve
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg sm:text-xl text-blanco/80 leading-relaxed">
            Muchos establecimientos producen correctamente desde lo técnico,
            pero no siempre logran traducir ese desempeño en resultados
            económicos consistentes.
          </p>

          <div>
            <p className="text-lg sm:text-xl text-blanco/80 leading-relaxed mb-4">
              En la práctica, esto suele reflejarse en:
            </p>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-lg sm:text-xl text-blanco/80"
                >
                  <span className="text-verde-acento mt-2">•</span>
                  <span>{problem}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="text-lg sm:text-xl text-verde-acento font-medium leading-relaxed">
            GESGA permite leer el sistema completo, no solo sus indicadores
            aislados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
