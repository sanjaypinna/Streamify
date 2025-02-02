import { topSongs } from "@/data/mockData";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TopStreamedSongsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={topSongs}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="song" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="streams" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsChart;
