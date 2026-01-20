"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const roles = ["Dueño", "Administrador", "Asesor", "Otro"];

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nombre: "",
    rol: "",
    provincia: "",
    whatsapp: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-arena relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-verde-acento/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-[var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo mb-4">
            Tomar buenas decisiones requiere entender el sistema completo.
          </h2>
          <p className="text-lg sm:text-xl text-grafito/70">
            GESGA te ayuda a ordenar la información, interpretar los resultados
            y decidir con criterio técnico y económico, alineado con los
            objetivos de tu empresa.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-blanco rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-verde-profundo/5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5 sm:space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-grafito mb-2"
              >
                Nombre y apellido{" "}
                <span className="text-verde-acento">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-verde-profundo/10 bg-arena/50 text-grafito placeholder:text-grafito/40 focus:outline-none focus:ring-2 focus:ring-verde-acento focus:border-transparent transition-all duration-200"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div>
              <label
                htmlFor="rol"
                className="block text-sm font-medium text-grafito mb-2"
              >
                Rol
              </label>
              <select
                id="rol"
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-verde-profundo/10 bg-arena/50 text-grafito focus:outline-none focus:ring-2 focus:ring-verde-acento focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%231F2937' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="">Seleccioná tu rol</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="provincia"
                className="block text-sm font-medium text-grafito mb-2"
              >
                Provincia
              </label>
              <input
                type="text"
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-verde-profundo/10 bg-arena/50 text-grafito placeholder:text-grafito/40 focus:outline-none focus:ring-2 focus:ring-verde-acento focus:border-transparent transition-all duration-200"
                placeholder="Ej: Buenos Aires"
              />
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-grafito mb-2"
              >
                WhatsApp{" "}
                <span className="text-grafito/50 font-normal">(opcional)</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-verde-profundo/10 bg-arena/50 text-grafito placeholder:text-grafito/40 focus:outline-none focus:ring-2 focus:ring-verde-acento focus:border-transparent transition-all duration-200"
                placeholder="Ej: +54 9 11 1234-5678"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-grafito mb-2"
              >
                Mensaje{" "}
                <span className="text-grafito/50 font-normal">(opcional)</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-verde-profundo/10 bg-arena/50 text-grafito placeholder:text-grafito/40 focus:outline-none focus:ring-2 focus:ring-verde-acento focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Contanos brevemente sobre tu establecimiento o qué te gustaría lograr..."
              />
            </div>

            <button
              type="button"
              disabled
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-blanco bg-verde-acento rounded-xl hover:bg-verde-profundo transition-all duration-200 shadow-lg shadow-verde-acento/25 hover:shadow-verde-profundo/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              Conversar sobre el diagnóstico de mi campo
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
