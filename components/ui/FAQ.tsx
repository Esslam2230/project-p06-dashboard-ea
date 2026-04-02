'use client';

export default function FAQ() {
  const faqs = [
    {
      question: "Wat zijn de SDG’s?",
      answer: "De SDG’s zijn 17 wereldwijde doelen opgesteld door de Verenigde Naties om armoede te verminderen, de planeet te beschermen en vrede en welvaart te bevorderen tegen 2030.",
    },
    {
      question: "Waarom zijn de SDG’s belangrijk?",
      answer: "Ze zorgen voor een richtlijn waarmee landen, bedrijven en individuen duurzame keuzes kunnen maken die mens en milieu ten goede komen.",
    },
    {
      question: "Hoe kan ik bijdragen aan de SDG’s?",
      answer: "Je kunt bijvoorbeeld bewust consumeren, energie besparen, vrijwilligerswerk doen of projecten steunen die een van de doelen ondersteunen.",
    },
    {
      question: "Zijn de SDG’s alleen voor overheden?",
      answer: "Nee, iedereen kan bijdragen. Bedrijven, scholen, NGO’s én burgers spelen een rol in het behalen van de doelen.",
    },
    {
      question: "Welke SDG’s zijn er?",
      answer: "Er zijn 17 doelen, zoals: geen armoede, goed onderwijs, schoon water en klimaatactie.",
    },
    {
      question: "Hoe worden de SDG’s gemeten?",
      answer: "De voortgang wordt wereldwijd gevolgd via statistieken en rapporten over bijvoorbeeld armoede, gezondheid, onderwijs en milieu.",
    },
    {
      question: "Wat kan ik leren op deze website over de SDG’s?",
      answer: "Je vindt informatie over elk doel, voorbeelden van projecten, manieren om zelf bij te dragen en nieuws over duurzaamheid wereldwijd.",
    },
    {
      question: "Kan ik projecten indienen of delen op deze website?",
      answer: "Dat hangt af van de functies van de site, maar vaak zijn er secties waar je voorbeelden van duurzame initiatieven kunt laten zien.",
    },
    {
      question: "Zijn de SDG’s relevant voor jongeren?",
      answer: "Ja, jongeren kunnen via educatie, innovatie en sociale initiatieven een groot verschil maken.",
    },
    {
      question: "Hoe weet ik of een project bijdraagt aan een SDG?",
      answer: "Een project draagt bij als het direct helpt een van de 17 doelen te behalen, bijvoorbeeld door armoede te verminderen, mensen gezonder te maken of het milieu te beschermen.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 space-y-6">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group border rounded-3xl p-6 bg-white/10 backdrop-blur-md border-teal-500/20 cursor-pointer transition-all hover:bg-white/20"
        >
          <summary className="font-semibold text-teal-300 text-lg md:text-xl group-open:text-teal-400">
            {faq.question}
          </summary>
          <p className="mt-4 text-gray-200">{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}
