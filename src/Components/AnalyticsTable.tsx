import React, { useEffect, useState } from "react";
import { getComponentNameAndClickCountFunction, getTemplatesAnalyticsFunction } from "../Utils/Api/Methords/getMethord";

const AnalyticsTable = () => {
   const [componentNameAndCount,setComponentNameAndCount]=useState([])
  const [templateData,setTemplateData]=useState([])
   const getComponentNameAndCount= async()=>{
    const response=await getComponentNameAndClickCountFunction()
    if(response.status){
      setComponentNameAndCount(response.data)
    }
   }


   const getTemplateAnalitycs= async ()=>{
    const response= await getTemplatesAnalyticsFunction()
    if(response.status){
      setTemplateData(response.data)
    }
   }

   useEffect(()=>{
    getComponentNameAndCount()
    getTemplateAnalitycs()
   },[])
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto px-8 lg:px-8 py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6">
        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium font-serif">Component Metrics</h2>
            {/* <h2 className="text-sm font-medium font-serif">Icon</h2> */}
          </div>
          <div className="flex-1 overflow-auto max-h-64">
            <table className="min-w-full table-auto bg-gray-900 rounded-lg">
              <thead className="bg-gray-700 text-xs uppercase text-gray-300">
                <tr>
                  <th className="py-2 px-4">Components</th>
                  <th className="py-2 px-4">Clicks</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-200">
              {componentNameAndCount && componentNameAndCount.length > 0 && (
  componentNameAndCount.map((component:any, index) => (
    <tr key={index}>
      <td className="py-2 px-4">{component.component_name}</td>
      <td className="py-2 px-4">{component.click_count}</td>
    </tr>
  ))
)}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium font-serif">Template Metrics</h2>
            <h2 className="text-sm font-medium font-serif">Icon</h2>
          </div>
          <div className="flex-1 overflow-auto max-h-64">
            <table className="min-w-full table-auto bg-gray-900 rounded-lg">
              <thead className="bg-gray-700 text-xs uppercase text-gray-300">
                <tr>
                  <th className="py-2 px-4">Templates</th>
                  <th className="py-2 px-4">Click</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-200">
                {templateData && templateData.length >0 && (
                  templateData.map((template:any,index)=>(
                    <tr key={index}>
                    <td className="py-2 px-4">{template._id}</td>
                    <td className="py-2 px-4">{template.count}</td>
                  </tr>
                  ))
                )}
               
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTable;
