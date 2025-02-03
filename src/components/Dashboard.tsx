import React from "react";
import MetricCards from "./MetricCards";
import { keyMetrics, recentStreams } from "@/data/mockData";
import Viz from "./Viz";
import { DataTable } from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";

// Example usage with Stream interface
interface Stream {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

interface MetricData {
  month: string;
  value: number | string;
}

const Dashboard = () => {
  const columns: ColumnDef<Stream>[] = [
    {
      accessorKey: "songName",
      header: "Song Name",
      cell: (info) => info.getValue() as string,
    },
    {
      accessorKey: "artist",
      header: "Artist",
      cell: (info) => info.getValue() as string,
    },
    {
      accessorKey: "dateStreamed",
      header: "Date Streamed",
      cell: (info) => formatDate(info.getValue() as string),
      sortingFn: "datetime",
    },
    {
      accessorKey: "streamCount",
      header: "Stream Count",
      cell: (info) => (info.getValue() as number).toString(),
    },
    {
      accessorKey: "userId",
      header: "User ID",
      cell: (info) => info.getValue() as string,
    },
  ];

  const metricColumns: ColumnDef<MetricData>[] = [
    {
      accessorKey: "month",
      header: "Month",
      cell: (info) => info.getValue() as string,
    },
    {
      accessorKey: "value",
      header: "Value",
      cell: (info) => (info.getValue() as number | string).toString(),
    },
  ];
  return (
    <main className="  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {keyMetrics.map((item, index) => (
          <div key={index}>
            <MetricCards
              data={item}
              tableColumns={metricColumns}
              tableData={item.data}
            />
          </div>
        ))}
      </div>
      <Viz />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Stream History</h2>
        <div className="bg-white rounded-xl  p-6">
          <DataTable data={recentStreams} columns={columns} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
