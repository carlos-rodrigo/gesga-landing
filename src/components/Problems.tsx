"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingDown, ListTodo } from "lucide-react";

const problems = [
  {
    icon: BarChart3,
    title: "Decisiones basadas en datos incompletos",
    description:
      "Sin una evaluación integral, las decisiones se toman con información parcial y sesgada.",
  },
  {
    icon: TrendingDown,
    title: "Ineficiencias que se vuelven costo",
    description:
      "Pequeñas pérdidas diarias que, acumuladas, impactan fuerte en la rentabilidad anual.",
  },
  {
    icon: ListTodo,
    title: "Mejoras que no se priorizan",
    description:
      "Sin un plan claro, las mejoras quedan en intención y nunca se ejecutan.",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-verde-profundo relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verde-acento/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-blanco">
            Lo que no se mide, se pierde
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-blanco/5 backdrop-blur-sm border border-blanco/10 rounded-2xl p-6 sm:p-8 hover:bg-blanco/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-verde-acento/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-verde-acento/20 mb-5 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-verde-acento" />
                  </div>
                  <h3 className="font-[var(--font-manrope)] text-xl sm:text-2xl font-semibold text-blanco mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-blanco/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
