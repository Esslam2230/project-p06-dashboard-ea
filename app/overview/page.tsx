import { Card, CardContent } from '@/components/ui/Card'
import { getAllSDGs } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'Overzicht | SDG Dashboard',
  description: 'Bekijk alle Duurzame Ontwikkelingsdoelen',
}

export default async function OverviewPage() {
  const allSDGs = getAllSDGs()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide">
            Duurzame Ontwikkelingsdoelen
          </h1>
          <p className="text-lg text-teal-200 max-w-3xl mx-auto leading-relaxed">
            De 17 Duurzame Ontwikkelingsdoelen zijn een universele oproep tot actie om armoede te beëindigen,
            de planeet te beschermen en welvaart voor iedereen te waarborgen tegen 2030.
          </p>
        </div>

        {/* SDG Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSDGs.map((sdg) => (
            <Card
              key={sdg.number}
              className="bg-gradient-to-b from-teal-800/40 to-black/40 border border-teal-700/40 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-[1.03] hover:shadow-teal-500/20 duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">

                  {/* SDG Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-md bg-gradient-to-br from-teal-500 to-teal-300 text-black">
                    {sdg.number}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-teal-200 drop-shadow-sm">
                    {sdg.title}
                    
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {sdg.description || 'Beschrijving volgt binnenkort.'}
                  </p>
                 
                  {/* Badge */}
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-700/40 text-teal-200 border border-teal-600/40">
                   <Link href={"sdg/" + sdg.number }> {sdg.implemented? 'Beschikbaar' : 'Binnenkort beschikbaar' }</Link> 
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
