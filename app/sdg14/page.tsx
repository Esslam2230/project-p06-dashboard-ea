import { prisma } from '@/lib/prisma';
import { BarChart } from '@/components/BarChart';
import { LineChart } from '@/components/LineChart';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { Kpi } from '@/components/kpi';


import dynamic from 'next/dynamic';

const WorldMap = dynamic(
    () => import('@/components/WorldMap'),
    { ssr: false }
);


type PageProps = {
    searchParams?: {
        countryId?: string;
    };
};

async function getSdgCountriesAsOptions() {
    const sdgCountries = await prisma.sdgcountry.findMany();

    const options: any[] = [];
    sdgCountries.forEach((item: any) => {
        options.push({
            value: item.id,
            label: item.name
        });
    })
    return options;
}

async function getSdgData(countryId: number) {
    const sdgData = await prisma.sdgvalue.findMany({
        where: {
            country_id: countryId,
            serie_id: 36
        },
        include: {
            sdgserie: true,
            sdgcountry: true
        },
        orderBy: {
            year: 'asc'
        }
    });
    return sdgData;
}
function prepareDataForGraph(sdgData: any[]) {
    const labels: string[] = [];
    const values: number[] = [];
    sdgData.forEach((item) => {
        labels.push(item.year ? item.year?.toString() : "-1");
        values.push(item.value ? item.value.toNumber() : -1);
    });

    const data = {

        labels: labels,
        datasets: [
            {
                label: sdgData[0]?.sdgserie.description,
                data: values,
            },
        ],
    };

    return data;
}

export default async function DashboardPage({ searchParams }: PageProps) {

    const optionArray = await getSdgCountriesAsOptions();

    const defaultCountryId = optionArray[0]?.value ?? undefined;
    const countryIdParam = searchParams?.countryId ?? "";
    const countryId = countryIdParam ? Number(countryIdParam) : defaultCountryId;

    console.log("Selected countryId:", countryId);

    const sdgData = countryId ? await getSdgData(countryId) : [];

    const data = prepareDataForGraph(sdgData);


    //kpi bekennen toevoegen hier
    const values = sdgData.map((item) => item.value?.toNumber() ?? 0);

    const lowestValue = values.length ? Math.min(...values) : 0;
    const highestValue = values.length ? Math.max(...values) : 0;
    const averageValue = values.length ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1) : 0;

    let trend = "Geen data";
    if (values.length > 1) {
        const diff = values[values.length - 1] - values[0]; trend = diff > 0 ? "Stijgend" : diff < 0 ? "Dalend " : "Gelijk";
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
                        SDG 14  Leven in het Water                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Ontdek hoe landen omgaan met het beschermen van oceanen, zeeleven en kustgebieden, en welke gevolgen dit heeft voor ecosystemen en gemeenschappen.                    </p>
                </div>
                <div className="flex justify-center">
                    <form method="GET" className="flex flex-col sm:flex-row gap-4 items-center bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-teal-500/20 shadow-2xl">
                        <Select id="countryId" name="countryId" options={optionArray} />
                        <Button type="submit">Submit</Button>
                    </form>
                </div>

                <div className="text-center text-gray-200 text-lg">
                    Data for country: {sdgData.length > 0 ? sdgData[0].sdgcountry?.name : "Selecteer een land"}
                </div>

                {/*  KPI BLOK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Kpi title="Trend" value={trend} />
                    <Kpi title="Laagste waarde" value={lowestValue} />
                    <Kpi title="Hoogste waarde" value={highestValue} />
                    <Kpi title="Gemiddelde waarde" value={averageValue} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-teal-500/20 shadow-2xl">
                        <BarChart data={data} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-teal-500/20 shadow-2xl">
                        <LineChart data={data} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                </div>
                <WorldMap />
                <div className="mt-8 bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-teal-500/20 shadow-2xl overflow-x-auto">
                    <table className="w-full text-sm text-white">
                        <thead className="text-xs uppercase text-teal-300 border-b border-white/20">
                            <tr>
                                <th className="px-4 py-2">Jaar</th>
                                <th className="px-4 py-2">Value</th>
                                <th className="px-4 py-2">Land</th>
                                <th className="px-4 py-2">Bron</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sdgData.map((item) => (
                                <tr key={item.id} className="border-b border-white/10">
                                    <td className="px-4 py-2">{item.year}</td>
                                    <td className="px-4 py-2">{item.value?.toString()}</td>
                                    <td className="px-4 py-2">{item.sdgcountry?.name}</td>
                                    <td className="px-4 py-2 text-teal-300">{item.sdgserie?.source}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div >

    );
}
