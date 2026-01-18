import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import KPIs from "@/components/KPIs";
import Deliverables from "@/components/Deliverables";
import AISection from "@/components/AISection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GESGA",
  description:
    "Diagnóstico ganadero y plan de mejoras impulsado por inteligencia artificial para establecimientos en Argentina.",
  url: "https://gesga.com.ar",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Diagnóstico ganadero",
    "Consultoría agropecuaria",
    "Análisis productivo",
    "Plan de mejoras",
  ],
  knowsAbout: [
    "Ganadería",
    "Eficiencia reproductiva",
    "Productividad ganadera",
    "Inteligencia artificial aplicada al agro",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Problems />
        <HowItWorks />
        <KPIs />
        <Deliverables />
        <AISection />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
