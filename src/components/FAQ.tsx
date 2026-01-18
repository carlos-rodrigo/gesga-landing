"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué información necesitan para el diagnóstico?",
    answer:
      "Trabajamos con la información que tengas disponible: registros de rodeo, datos de manejo, sanidad, alimentación y resultados productivos. Te guiamos en el proceso.",
  },
  {
    question: "¿La demo tiene costo?",
    answer:
      "No. La demo es una conversación inicial para entender tu situación y mostrarte cómo sería el diagnóstico para tu establecimiento.",
  },
  {
    question: "¿Cuánto tarda el diagnóstico completo?",
    answer:
      "Depende del alcance, pero típicamente entre 2 y 4 semanas desde el relevamiento inicial.",
  },
  {
    question: "¿La información es confidencial?",
    answer:
      "Absolutamente. Toda la información de tu establecimiento se trata con estricta confidencialidad.",
  },
  {
    question: "¿Trabajan con cría, invernada o feedlot?",
    answer:
      "Sí, adaptamos el diagnóstico al sistema productivo de cada establecimiento.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="border-b border-verde-profundo/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 rounded-lg"
      >
        <span className="font-[var(--font-manrope)] text-lg sm:text-xl font-semibold text-verde-profundo pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-verde-acento/10 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-verde-acento" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-grafito/70 leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Preguntas frecuentes
          </h2>
        </motion.div>

        {isInView && (
          <div className="bg-arena rounded-2xl p-6 sm:p-8 border border-verde-profundo/5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
