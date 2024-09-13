
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ModalComponent from "./ModalComponent";
import { MdArrowOutward } from "react-icons/md";
import {
  getTemplatesAnalyticsFunction,
  getUserAnalyticsFunction,
} from "../Utils/Api/Methords/getMethord";

const AnalyticsGraph = () => {
  const [analyticsData, setAnalyticsData] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [returningUsers, setReturningUsers] = useState(0);
  const [top5TemplateData, setTop5TemplateData]: any = useState([]);

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
        type: "Day",
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

  // Bar chart for Total Users and Returning Users
  const barChartOptions = {
    series: [
      {
        name: "Total Users",
        data: [totalUsers], // Replace with actual data
      },
      {
        name: "Returning Users",
        data: [returningUsers], // Replace with actual data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + " users";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#000"],
        },
      },
      xaxis: {
        categories: ["Total Users", "Returning Users"],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + " users";
          },
        },
      },
      title: {
        text: "User Statistics",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#7861d7",
        },
      },
      colors: ["#0C8CE9", "#0ACF83"], // Add a second color for returning users
    },
  };

  // Horizontal bar chart
  const horizontalBarChartOptions = {
    series: [
      {
        data: top5TemplateData.series || [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 1,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: top5TemplateData.categories || [],
      },
    },
  };

  //
  useEffect(() => {
    (async () => {
      const response = await getUserAnalyticsFunction();
      if (response.status) {
        setTotalUsers(response.data.totalUsersCount);
        setReturningUsers(response.data.returningUsersCount);
      }
    })(),
      (async () => {
        const response = await getTemplatesAnalyticsFunction();
        if (response.status) {
          const templateNames = response.data
            .slice(0, 5)
            .map((item: any) => item._id);
          const templateCounts = response.data
            .slice(0, 5)
            .map((item: any) => item.count);

          setTop5TemplateData({
            categories: templateNames,
            series: templateCounts,
          });
        }
      })();
  }, []);

  return (
    <>
      <ModalComponent
        isVisible={analyticsData}
        onClose={() => {
          setAnalyticsData(false);
        }}
      />
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 lg:px-8 py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6">
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-medium font-poppins">
                Total Users vs Returning Users
              </h2>
              <div className="text-xs font-medium font-serif cursor-pointer">
                <MdArrowOutward />
              </div>
            </div>
            <div className="flex-1 overflow- max-h-72 text-black">
              <ReactApexChart
                options={barChartOptions.options}
                series={barChartOptions.series}
                type="bar"
                height={280}
              />
            </div>
          </div>

          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-medium font-serif">
                Template Popularity Bar
              </h2>
              <div className="text-xs font-medium font-serif cursor-pointer">
                <MdArrowOutward />
              </div>
            </div>
            <div className="flex-1 overflow- max-h-64 text-black">
              <ReactApexChart
                options={horizontalBarChartOptions.options}
                series={horizontalBarChartOptions.series}
                type="bar"
                height={280}
              />
            </div>
          </div>

          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-medium font-serif">
                Most Clicked Components graph
              </h2>
              <div className="text-xs font-medium font-serif cursor-pointer">
                <MdArrowOutward />
              </div>
            </div>
            <div className="flex-1 overflow- max-h-72">
              <ReactApexChart
                options={state?.options}
                series={state?.series}
                type="area"
                height={280}
              />
            </div>
          </div>

          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-medium font-serif">
                Clicked Per Session
              </h2>
              <div className="text-xs font-medium font-serif cursor-pointer">
                <MdArrowOutward />
              </div>
            </div>
            <div className="flex-1 overflow- max-h-64">
              <ReactApexChart
                options={state?.options}
                series={state?.series}
                type="area"
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsGraph;

