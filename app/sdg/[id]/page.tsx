import { notFound, redirect } from 'next/navigation'
import { getSDGById } from '@/lib/data'
import { prisma } from '@/lib/prisma'
import { SDGDetailClient } from './SDGDetailClient'

// TODO: Update deze lijst met de SDGs die je implementeert
export async function generateStaticParams() {
  return [
    { id: '2' },
    { id: '3' },
    { id: '6' },
    { id: '14' },
  ]
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const sdg = getSDGById(parseInt(params.id))
  
  if (!sdg) {
    return { title: 'SDG Niet Gevonden' }
  }
  
  return {
    title: `SDG ${sdg.number}: ${sdg.title} | SDG Dashboard`,
    description: sdg.description,
  }
}

async function getSDGData(sdgNumber: number) {
  // TODO: Haal metrics op uit de database voor dit SDG
  const metrics = await prisma.sdgMetric.findMany({
    where: { sdgNumber },
    orderBy: [{ year: 'asc' }, { country: 'asc' }],
  })
  
  return metrics
}

export default async function SDGDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // TODO: Parse SDG nummer en valideer
  const sdgNumber = parseInt(params.id)
  const sdg = getSDGById(sdgNumber)

  // Als SDG niet bestaat of niet geïmplementeerd, toon 404
  if (!sdg || !sdg.implemented) {
    notFound()
  }
  console.log('test' + sdgNumber);
  if(sdgNumber === 6){
    redirect('/sdg6')
  } else if(sdgNumber === 14){
  redirect('/sdg14')
  }
  
  //sdgNumber === 3 en 2
    if(sdgNumber === 3){
    redirect('/sdg3')
  } else if(sdgNumber === 2){
    redirect('/sdg2');
    
  }
 

  // TODO: Haal metrics data op
  const metrics = await getSDGData(sdgNumber)

  // TODO (Optioneel): Als je authenticatie hebt, haal user data op
  // const session = await auth()
  // const isFavorite = await checkIfFavorite(session?.user?.id, sdgNumber)

  return (
    <SDGDetailClient
      sdg={sdg}
      metrics={metrics}
      isAuthenticated={false}  // TODO: Update bij authenticatie
      isFavorite={false}       // TODO: Update bij authenticatie
    />
  )
}


