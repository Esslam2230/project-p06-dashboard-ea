import Map from "@/components/map";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white">

      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-[url(/contact-hero.avif)] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
          <h1
            className="text-white text-5xl md:text-6xl font-extrabold"
            style={{ fontFamily: 'Times, "Times New Roman", serif' }}
          >
           Welkom op ons Contact
          </h1>

          <p
            className="text-white text-lg md:text-xl"
            style={{ fontFamily: 'Times, "Times New Roman", serif' }}
          >
            Heb je een vraag over de SDG’s of wil je meer weten over dit project? <br />
            Stuur ons een bericht en denk mee over een duurzame toekomst.
          </p>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-center">
          <div className="w-full max-w-xl rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-teal-500/20 p-10">

            <h2 className="text-3xl font-bold text-teal-300 text-center mb-8">
              Stuur ons een bericht
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-200">Naam</label>
                <input
                  type="text"
                  placeholder="Je naam"
                  className="w-full rounded-xl bg-black/40 border border-teal-500/30 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-200">E-mail</label>
                <input
                  type="email"
                  placeholder="Je e-mail"
                  className="w-full rounded-xl bg-black/40 border border-teal-500/30 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-200">Bericht</label>
                <textarea
                  placeholder="Je bericht"
                  rows={5}
                  className="w-full rounded-xl bg-black/40 border border-teal-500/30 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-500 hover:bg-teal-600 transition-all py-3 font-semibold text-black shadow-lg"
              >
                Verstuur bericht
              </button>
            </form>

          </div>
        </div>
        <Map/>
      </section>
    </main>
  );
}
