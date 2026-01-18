import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GESGA | Diagnóstico ganadero impulsado por IA",
  description:
    "GESGA evalúa el desempeño productivo y de manejo de tu establecimiento ganadero, detecta oportunidades y entrega un plan priorizado para mejorar resultados.",
  keywords: [
    "diagnóstico ganadero",
    "mejora productiva",
    "ganadería Argentina",
    "inteligencia artificial",
    "establecimientos ganaderos",
    "cría",
    "invernada",
    "feedlot",
    "eficiencia reproductiva",
    "plan de mejoras",
  ],
  authors: [{ name: "GESGA" }],
  creator: "GESGA",
  metadataBase: new URL("https://gesga.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GESGA | Diagnóstico ganadero impulsado por IA",
    description:
      "Evaluamos tu establecimiento ganadero y entregamos un plan de mejoras priorizado para aumentar rentabilidad.",
    url: "https://gesga.com.ar",
    siteName: "GESGA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GESGA | Diagnóstico ganadero impulsado por IA",
    description:
      "Evaluamos tu establecimiento ganadero y entregamos un plan de mejoras priorizado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-arena text-grafito`}
      >
        {children}
      </body>
    </html>
  );
}
