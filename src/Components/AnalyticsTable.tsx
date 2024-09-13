import React from "react";

const AnalyticsTable = () => {
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
                  <th className="py-2 px-4">Total Cllicks</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-200">
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Witchy Woman</td>
                  <td className="py-2 px-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium font-serif">Template analytics</h2>
            {/* <h2 className="text-sm font-medium font-serif">Icon</h2> */}
          </div>
          <div className="flex-1 overflow-auto max-h-64">
            <table className="min-w-full table-auto bg-gray-900 rounded-lg">
              <thead className="bg-gray-700 text-xs uppercase text-gray-300">
                <tr>
                  <th className="py-2 px-4">Template Name</th>
                  <th className="py-2 px-4">Toatl Clicks</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-200">
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Witchy Woman</td>
                  <td className="py-2 px-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Witchy Woman</td>
                  <td className="py-2 px-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Witchy Woman</td>
                  <td className="py-2 px-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">The Sliding Mr. Bones</td>
                  <td className="py-2 px-4">Malcolm Lockyer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTable;
