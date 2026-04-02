'use client'

import { useState, useMemo } from 'react'
import { SDGInfo, SDGMetric } from '@/lib/types'
import { Card, CardContent } from '@/components/ui/Card'

interface SDGDetailClientProps {
  sdg: SDGInfo
  metrics: SDGMetric[]
  isAuthenticated: boolean
  isFavorite: boolean
}

export function SDGDetailClient({ 
  sdg, 
  metrics, 
  isAuthenticated, 
  isFavorite 
}: SDGDetailClientProps) {
  // TODO: Implementeer filter state
  const [filters, setFilters] = useState<{
    country?: string
    from?: number
    to?: number
  }>({})

  // TODO: Implementeer filtering logic
  const filteredMetrics = useMemo(() => {
    let filtered = metrics
    
    // Voeg hier je filter logica toe
    // if (filters.country) { ... }
    // if (filters.from) { ... }
    // if (filters.to) { ... }
    
    return filtered
  }, [metrics, filters])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            {/* SDG Icon */}
            <div
              className="w-24 h-24 rounded-xl flex items-center justify-center text-5xl flex-shrink-0"
              style={{ backgroundColor: sdg.color }}
            >
              {sdg.icon}
            </div>
            
            {/* SDG Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                SDG {sdg.number}: {sdg.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {sdg.description}
              </p>
              
              {/* TODO (Optioneel): Voeg favoriet knop toe bij authenticatie */}
              {/* {isAuthenticated && (
                <Button onClick={handleToggleFavorite}>
                  {isFavorite ? '⭐ Favoriet' : '☆ Toevoegen'}
                </Button>
              )} */}
            </div>
          </div>
        </div>

        {/* KPI Section */}
        {/* TODO: Implementeer KPI cards */}
        {/* Hint: Gebruik de KPI component uit components/ui/KPI.tsx */}
        {/* Bereken: laatste jaar, vorig jaar, trend */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              <p>TODO: Implementeer KPI cards</p>
              <p className="text-sm mt-2">Toon 4 belangrijke statistieken met trends</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Bar */}
        {/* TODO: Implementeer FilterBar component */}
        {/* <div className="mb-8">
          <FilterBar onFilterChange={setFilters} />
        </div> */}

        {/* Charts Section */}
        {/* TODO: Implementeer charts op basis van SDG nummer */}
        {/* Gebruik LineChart, BarChart, PieChart componenten */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              <p>TODO: Implementeer charts voor SDG {sdg.number}</p>
              <p className="text-sm mt-2">
                Bekijk README.md voor welke charts je moet maken
              </p>
              <p className="text-xs mt-2">
                Data beschikbaar: {metrics.length} metrics
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        {/* TODO: Implementeer data tabel met Table component */}
        {/* <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Gegevenstabel</h3>
              <Table
                data={filteredMetrics}
                columns={[...]}
                enableExport
              />
            </CardContent>
          </Card>
        </div> */}

        {/* Debug Info */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Debug Info</h3>
              <p className="text-sm text-gray-600">
                Aantal metrics: {metrics.length}
              </p>
              <p className="text-sm text-gray-600">
                Gefilterde metrics: {filteredMetrics.length}
              </p>
              {metrics.length > 0 && (
                <>
                  <p className="text-sm text-gray-600 mt-2">
                    Eerste metric: {JSON.stringify(metrics[0])}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Beschikbare metric keys: {[...new Set(metrics.map(m => m.metricKey))].join(', ')}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}


