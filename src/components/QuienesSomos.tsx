"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const team = [
  {
    name: "Juan",
    description:
      "Ingeniero Agrónomo, con formación de posgrado en economía agraria y experiencia en análisis de márgenes, costos, rentabilidad y evaluación económica de sistemas productivos. Su trayectoria en el ámbito institucional y técnico aporta la mirada económica, de gestión y de negocio al diagnóstico integral del establecimiento.",
  },
  {
    name: "Manuel",
    description:
      "Ingeniero Agrónomo, con amplia experiencia en sistemas ganaderos, sanidad animal y experimentación a campo. Su trayectoria técnica y su trabajo en el ámbito institucional, particularmente en INTA, aportan profundidad productiva, rigor técnico y enfoque agroecosistémico al análisis del sistema.",
  },
];

export default function QuienesSomos() {
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
            Quiénes somos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg sm:text-xl text-grafito/80 leading-relaxed mb-16"
        >
          <p>
            GESGA está conformado por un equipo de profesionales con formación y
            experiencia en producción agropecuaria, economía agraria y gestión
            de empresas agropecuarias.
          </p>
          <p>
            El proyecto surge de la complementariedad entre el análisis
            técnico-productivo y la lectura económica del sistema, entendiendo
            que las decisiones que realmente mejoran resultados requieren
            integrar producción, costos, capital y contexto.
          </p>
          <p>
            Nuestro enfoque se apoya en experiencia desarrollada tanto en el
            ámbito productivo como institucional, particularmente en INTA, con
            una mirada integral y de largo plazo, orientada a productores que
            gestionan su establecimiento como una empresa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="font-[var(--font-manrope)] text-2xl sm:text-3xl font-bold text-verde-profundo text-center">
            Equipo
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group bg-arena rounded-2xl p-6 sm:p-8 border border-verde-profundo/5 hover:shadow-lg hover:border-verde-acento/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-verde-acento/10 group-hover:bg-verde-acento/20 transition-colors duration-300">
                  <User className="w-7 h-7 text-verde-acento" />
                </div>
                <h4 className="font-[var(--font-manrope)] text-xl sm:text-2xl font-semibold text-verde-profundo">
                  {member.name}
                </h4>
              </div>
              <p className="text-grafito/80 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
