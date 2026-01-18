"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Cpu, FileText, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Relevamiento",
    description: "Analizamos tu situación actual, objetivos y datos disponibles.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Evaluación con IA",
    description: "Procesamos la información con inteligencia artificial y criterio técnico.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Plan de mejoras",
    description: "Entregamos un plan priorizado por impacto y esfuerzo.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Seguimiento",
    description: "Acompañamos la ejecución y medimos resultados.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-arena relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            De diagnóstico a acción, sin vueltas
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-blanco rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-verde-profundo/5 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-[var(--font-manrope)] text-4xl sm:text-5xl font-bold text-verde-profundo/10">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-verde-acento/10 group-hover:bg-verde-acento/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-verde-acento" />
                    </div>
                  </div>
                  <h3 className="font-[var(--font-manrope)] text-xl sm:text-2xl font-semibold text-verde-profundo mb-2">
                    {step.title}
                  </h3>
                  <p className="text-grafito/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-verde-profundo/20" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
