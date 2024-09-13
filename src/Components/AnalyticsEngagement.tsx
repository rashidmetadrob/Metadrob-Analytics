import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts'
import { MdArrowOutward } from "react-icons/md";
const AnalyticsEngagement = () => {
    const [state, setState] = useState({
        series: [
          {
            name: "Completed",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "Not Completed",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          colors: ["#0C8CE9", "#7861d7"],
        },
      });
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 lg:px-8 py-0">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6"> {/* Adjusted gap */}
        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Engagement</h2>
            <div className="text-xs font-medium font-serif cursor-pointer">
            <MdArrowOutward />
            </div>
          </div>
        <div className="flex-1 overflow- max-h-96 text-black">
        <ReactApexChart
              options={state.options}
              series={state.series}
              type="area"
              height={280}
            />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AnalyticsEngagement;
