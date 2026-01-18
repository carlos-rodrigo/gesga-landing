"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Database, Lightbulb, Zap } from "lucide-react";

export default function AISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-verde-profundo relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-verde-acento/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-verde-acento/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-blanco leading-tight mb-6">
              IA para acelerar el análisis.{" "}
              <span className="text-verde-acento">Criterio técnico</span> para
              las decisiones.
            </h2>
            <p className="text-lg sm:text-xl text-blanco/80 leading-relaxed">
              Utilizamos inteligencia artificial para detectar patrones,
              inconsistencias y oportunidades a partir de la información de tu
              establecimiento. GESGA transforma ese análisis en un plan de
              acción entendible y ejecutable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-blanco/5 backdrop-blur-sm border border-blanco/10 rounded-3xl p-8 sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-verde-acento/10 via-transparent to-verde-profundo/20 rounded-3xl" />
              
              <div className="relative grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-verde-acento/20 mb-4">
                    <Database className="w-7 h-7 text-verde-acento" />
                  </div>
                  <span className="text-blanco/80 text-sm font-medium">
                    Datos del establecimiento
                  </span>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-verde-acento/20 mb-4">
                    <Sparkles className="w-7 h-7 text-verde-acento" />
                  </div>
                  <span className="text-blanco/80 text-sm font-medium">
                    Análisis con IA
                  </span>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-verde-acento/20 mb-4">
                    <Lightbulb className="w-7 h-7 text-verde-acento" />
                  </div>
                  <span className="text-blanco/80 text-sm font-medium">
                    Insights accionables
                  </span>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-verde-acento/20 mb-4">
                    <Zap className="w-7 h-7 text-verde-acento" />
                  </div>
                  <span className="text-blanco/80 text-sm font-medium">
                    Ejecución guiada
                  </span>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-verde-acento/30 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-verde-acento rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blanco"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
