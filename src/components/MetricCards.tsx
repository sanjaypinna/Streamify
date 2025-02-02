import { LucideIcon } from "lucide-react";
import React from "react";

interface MetricCardProps {
  data: {
    title: string;
    value: number | string;
    icon: LucideIcon;
    trend?: number;
    isPositive?: boolean;
  };
}

const MetricCards: React.FC<MetricCardProps> = ({ data }) => {
  const IconComponent = data.icon;
  return (
    <div className=" p-4 rounded-xl bg-white shadow-lg">
      <div className=" flex flex-col gap-2 ">
        <div className="flex items-center flex-wrap gap-2 md:min-w-40 w-auto">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <IconComponent />
          </div>
          <h3 className=" text-base font-bold text-gray-600 break-words">
            {data.title}
          </h3>
        </div>

        <div className=" flex justify-between items-center flex-wrap gap-2">
          <p className=" text-lg font-bold animate-value">{data.value}</p>
          <div>
            {data.trend && (
              <span
                className={`text-sm ${
                  data.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {data.trend ? "+" : "-"}
                {Math.abs(data.trend)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;
