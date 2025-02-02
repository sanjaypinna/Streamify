import { userGrowthData } from "@/data/mockData";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const formatLegend = (value: string) => {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const formatYAxis = (tickItem: number) => {
  return `${(tickItem / 1000).toFixed(1)}k`;
};

const UserGrowthChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userGrowthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={formatYAxis} />
        <Tooltip
          formatter={(value: number, name: string) => [
            value,
            formatLegend(name),
          ]}
        />
        <Legend formatter={formatLegend} />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
