"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Coins, Settings } from "lucide-react";

const categories = [
  {
    icon: Target,
    title: "Indicadores técnicos",
    items: [
      "eficiencia reproductiva y productiva,",
      "productividad por hectárea,",
      "carga animal y uso del recurso forrajero,",
      "pérdidas, mermas y manejo.",
    ],
  },
  {
    icon: Coins,
    title: "Indicadores económicos",
    items: [
      "márgenes brutos por actividad,",
      "estructura de costos directos y totales,",
      "resultado global de la empresa,",
      "rentabilidad del capital invertido.",
    ],
  },
  {
    icon: Settings,
    title: "Sistema y contexto",
    items: [
      "coherencia técnica-económica del planteo productivo,",
      "restricciones estructurales del sistema,",
      "impacto del ambiente y del clima,",
      "escenarios de mejora posibles.",
    ],
  },
];

export default function KPIs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Qué analizamos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-arena rounded-2xl p-6 sm:p-8 border border-verde-profundo/5 hover:shadow-lg hover:border-verde-acento/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-verde-acento/10 group-hover:bg-verde-acento/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-verde-acento" />
                  </div>
                  <h3 className="font-[var(--font-manrope)] text-xl sm:text-2xl font-semibold text-verde-profundo">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-grafito/80"
                    >
                      <span className="text-verde-acento mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
