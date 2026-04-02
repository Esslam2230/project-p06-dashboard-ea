interface KpiProps {
  title: string;
  value: number | string;
  previousValue?: number;
}

export const Kpi = ({ title, value }: KpiProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        {title}
      </p>

      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {value}
        </p>
      </div>
    </div>
  );
};