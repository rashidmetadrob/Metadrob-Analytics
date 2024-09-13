import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Sankey from 'highcharts/modules/sankey';
import { MdArrowOutward } from "react-icons/md";

// Initialize Highcharts Sankey module
Sankey(Highcharts);

const AnalyticsEngagement = () => {
  const data={
    // Area chart data and options
    seriesArea: [
      {
        name: "Completed",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Not Completed",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    optionsArea: {
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

    // Sankey chart data and options for Highcharts
    sankeyOptions: {
      title: {
        text: 'Energy Flow',
        style: {
          color: '#fff',
        },
      },
      chart: {
        type: 'sankey',
        height: 350,
        backgroundColor: '#000',
      },
      series: [
        {
          keys: ['from', 'to', 'weight'],
          data: [
            ['Oil', 'Fossil Fuels', 15],
            ['Natural Gas', 'Fossil Fuels', 20],
            ['Coal', 'Fossil Fuels', 25],
            ['Coal', 'Electricity', 25],
            ['Fossil Fuels', 'Energy', 60],
            ['Electricity', 'Energy', 25],
          ],
          name: 'Energy Flow',
        },
      ],
    },
  };

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 lg:px-8 py-0">
      <div className="grid grid-cols-1 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6">
        
        {/* Sankey Chart Section using Highcharts */}
        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Engagement</h2>
            <div className="text-xs font-medium font-serif cursor-pointer">
              <MdArrowOutward />
            </div>
          </div>
          <div className="flex-1 overflow-hidden max-h-96 text-black">
            <HighchartsReact
              highcharts={Highcharts}
              options={data.sankeyOptions}
            />
          </div>
        </div>

        {/* Area Chart Section
        <div className="bg-white rounded-lg p-4 shadow-lg text-black flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-medium font-serif">Area Chart</h2>
          </div>
          <div className="flex-1 overflow-hidden max-h-96">
            <ReactApexChart
              options={state.optionsArea}
              series={state.seriesArea}
              type="area"
              height={350}
            />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default AnalyticsEngagement;
