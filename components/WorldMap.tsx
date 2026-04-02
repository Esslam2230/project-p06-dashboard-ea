'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
} from 'chartjs-chart-geo';
import * as topojson from 'topojson-client';

Chart.register(
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
);

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!canvasRef.current) return;

    // destroy immediately if something exists
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then(r => r.json())
      .then(data => {
        if (cancelled || !canvasRef.current) return;

        const countries = (topojson.feature(
          data as any,
          (data as any).objects.countries
        ) as any).features;

        // destroy again just before creating (double safety)
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvasRef.current, {
          type: 'choropleth',
          data: {
            labels: countries.map((d: any) => d.properties.name),
            datasets: [
              {
                label: 'Countries',
                data: countries.map((d: any) => ({
                  feature: d,
                  value: Math.random()
                }))
              }
            ]
          },
          options: {
            plugins: {
              legend: { display: false }
            },
            scales: {
              projection: {
                axis: 'x',
                projection: 'equalEarth'
              }
            }
          }
        });
      });

    return () => {
      cancelled = true;
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
