export default function Homepage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url(/live-bekijk-hier-de-aarde-vanuit-de-ruimte.avif)] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
          {/* Heading */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
  Onze Planeet, Onze Doelen
</h1>


          {/* Paragraaf */}
          <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            Één planeet, één kans<br></br>laten we samen bouwen aan een duurzame toekomst voor iedereen.
          </p>
        </div>

      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-28">

        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-teal-500/20">
            <img
              src="/sdg-wegwijzer-circulaire-bedrijfsvoering.webp"
              alt="Beschrijving"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          <div className="flex flex-col justify-center md:pr-20 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-300 drop-shadow-lg ">SDG’s in Beeld</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Welkom op deze website! Hier ontdek je alles over de duurzame ontwikkelingsdoelen (SDG’s) en waarom ze zo belangrijk zijn voor een betere wereld.
              <br /><br />
              📊 Met staafdiagrammen, grafieken en visuele uitleg krijg je in één oogopslag inzicht in de huidige wereldsituatie.
              <br /><br />
              Ons doel is om kennis toegankelijk te maken en jou te helpen begrijpen welke impact de SDG’s hebben. Samen leren we hoe we kunnen bijdragen aan een positieve verandering.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col justify-center md:pr-20 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-300 drop-shadow-lg">Leren, Begrijpen, Bijdragen</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Wij geloven dat bewustwording en kennis de eerste stap zijn naar verandering. Met deze website willen we mensen laten zien wat er in de wereld speelt en welke oplossingen de duurzame ontwikkelingsdoelen (SDG’s) bieden.
              <br /><br />
              📊 Grafieken, staafdiagrammen en duidelijke informatie maken complexe onderwerpen toegankelijk voor iedereen.
              <br /><br />
              🌍 We hopen bezoekers te inspireren om meer te leren én zelf bij te dragen aan een betere toekomst.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-teal-500/20">
            <img
              src="/grafieken.avif"
              alt="Afbeelding 2"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

        </div>
      </section>
    </main>
  );
}
