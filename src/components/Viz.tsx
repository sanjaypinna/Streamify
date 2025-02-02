import React from "react";
import UserGrowthChart from "./Vizlayer/UserGrowth";
import RevenueDistributionChart from "./Vizlayer/RevenueChart";
import TopStreamedSongsChart from "./Vizlayer/TopSongs";

const Viz = () => {
  return (
    <div className=" p-6">
      <p className=" font-bold text-lg">Visualizations</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white m-2 p-3 lg:p-6 rounded-xl shadow-lg">
          <p className="text-base font-semibold mb-4">User Growth</p>
          <UserGrowthChart />
        </div>
        <div className="bg-white m-2 p-3 lg:p-6 rounded-xl shadow-lg">
          <p className="text-base font-semibold mb-4">Revenue Distribution</p>
          <RevenueDistributionChart />
        </div>
        <div className="bg-white m-2 p-3 lg:p-6 rounded-xl shadow-lg">
          <p className="text-base font-semibold mb-4">Top 5 Streamed Songs</p>
          <TopStreamedSongsChart />
        </div>
      </div>
    </div>
  );
};

export default Viz;
