'use client';

import FAQ from "@/components/ui/FAQ";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white flex flex-col">

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-[url('/faq-hero.avif')] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            Veelgestelde Vragen over SDG's
          </h1>
          <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            Hier vind je antwoorden op de meest voorkomende vragen over de Sustainable Development Goals.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-5xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Support</h2>
        <p className="text-lg text-gray-300">
          Hier vind je veelgestelde vragen en hulp over onze SDG-website.
        </p>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </main>
  );
}
