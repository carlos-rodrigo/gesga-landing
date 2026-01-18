"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Scale, Coins, HeartPulse, Leaf } from "lucide-react";

const kpis = [
  {
    icon: Target,
    title: "Eficiencia reproductiva",
    subtitle: "(preñez / destete)",
  },
  {
    icon: Scale,
    title: "Productividad",
    subtitle: "(kg/ha/año)",
  },
  {
    icon: Coins,
    title: "Costo por kg producido",
    subtitle: null,
  },
  {
    icon: HeartPulse,
    title: "Mermas y mortandad",
    subtitle: null,
  },
  {
    icon: Leaf,
    title: "Eficiencia forrajera",
    subtitle: null,
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
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo mb-4">
            Indicadores que buscamos optimizar
          </h2>
          <p className="text-lg sm:text-xl text-grafito/70">
            Según el sistema productivo de tu establecimiento
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-4 bg-arena rounded-full border border-verde-profundo/10 hover:border-verde-acento/30 hover:bg-verde-acento/5 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-verde-acento/10 group-hover:bg-verde-acento/20 transition-colors duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-verde-acento" />
                </div>
                <div>
                  <span className="font-medium text-verde-profundo text-sm sm:text-base">
                    {kpi.title}
                  </span>
                  {kpi.subtitle && (
                    <span className="text-grafito/50 text-sm ml-1">
                      {kpi.subtitle}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
