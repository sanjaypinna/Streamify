import React from "react";
import MetricCards from "./MetricCards";
import { keyMetrics, recentStreams } from "@/data/mockData";
import Viz from "./Viz";
import { DataTable } from "./DataTable";



const Dashboard = () => {
  return (
    <main className="  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {keyMetrics.map((item, index) => (
          <div key={index}>
            <MetricCards data={item} />
          </div>
        ))}
      </div>
      <Viz />
      <div className="p-6">
        <DataTable data={recentStreams} />
      </div>
    </main>
  );
};

export default Dashboard;
