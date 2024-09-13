import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts'
import ModalComponent from "./ModalComponent";
const AnalyticsGraph = () => {
  const [analyticsData,setAnalyticsData] = useState(true)
  const [state, setState] = useState({
    series: [
      {
        name: 'Completed',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Not Completed',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2, // Remove the line
      },
      xaxis: {
        type: 'Day',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false, // Hide the X-axis line
        },
        axisTicks: {
          show: false, // Hide the X-axis ticks
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: ['#0C8CE9', '#7861d7'],
    },
  });
  return (
    <>
    <ModalComponent isVisible={analyticsData} onClose={() => { setAnalyticsData(false) }} />
    <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 lg:px-8 py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6"> {/* Adjusted gap */}
        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Total Users vs Returning Users</h2>
            <h2 className="text-xs font-medium font-serif">Icon</h2>
          </div>
        <div className="flex-1 overflow- max-h-72 text-black">
        <ReactApexChart options={state?.options} series={state?.series} type="area" height={280} />
          </div> 
        </div>

        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Clicks per session</h2>
            <h2 className="text-xs font-medium font-serif">Icon</h2>
          </div>
    <div className="flex-1 overflow- max-h-64">
    <div className="flex-1 overflow- max-h-72 text-black">
        <ReactApexChart options={state?.options} series={state?.series} type="area" height={280} />
          </div> 
          </div> 
        </div>

        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Most Clicked Components graph</h2>
            <h2 className="text-xs font-medium font-serif">Icon</h2>
          </div>
        <div className="flex-1 overflow- max-h-72">
        <div className="flex-1 overflow- max-h-72 text-black">
        <ReactApexChart options={state?.options} series={state?.series} type="area" height={280} />
          </div> 
          </div>
        </div>
   
        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Template Popularity Bar</h2>
            <h2 className="text-xs font-medium font-serif">Icon</h2>
          </div>
        <div className="flex-1 overflow- max-h-64">
        <div className="flex-1 overflow- max-h-96 text-black">
        <ReactApexChart options={state?.options} series={state?.series} type="area" height={280} />
          </div> 
          </div>
        </div>



      </div>
    </div>
    </>
  );
};

export default AnalyticsGraph;
