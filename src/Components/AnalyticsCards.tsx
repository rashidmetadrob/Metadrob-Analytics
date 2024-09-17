import { useEffect, useState } from "react";
import { getClicksAnalyticsFunction, getMostClickedComponentFunction, getTemplateCounts, getUserAnalyticsFunction } from "../Utils/Api/Methords/getMethord";

const AnalyticsCards = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [returningUsers, setReturningUsers] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [clickPerSession, setClickPerSession] = useState(0);
  const [templateCounts, setTemplateCounts] = useState(0);
  const [mostClickedComponent, setMostClickedComponent] = useState({
    componentName: "",
    count: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const userResponse = await getUserAnalyticsFunction();
      if (userResponse.status) {
        setTotalUsers(userResponse.data.totalUsersCount);
        setReturningUsers(userResponse.data.returningUsersCount);
      } else {
        setError(userResponse.message);
      }

      const clicksResponse = await getClicksAnalyticsFunction();
      if (clicksResponse.status) {
        setTotalClicks(clicksResponse.data.totalClicks);
      } else {
        setError(clicksResponse.message);
      }

      const mostClickedResponse = await getMostClickedComponentFunction();
      if (mostClickedResponse.status) {
        setMostClickedComponent({
          componentName: mostClickedResponse.data._id,
          count: mostClickedResponse.data.count
        });
      } else {
        setError(mostClickedResponse.message);
      }

      const templateResponse = await getTemplateCounts();
      if (templateResponse.status) {
        setTemplateCounts(templateResponse.data);
      } else {
        setError(templateResponse.message);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6">
      {loading ? (
        <div className="col-span-full text-center">Loading...</div>
      ) : error ? (
        <div className="col-span-full text-center text-red-500">{error}</div>
      ) : (
        <>
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-roboto">Total User</h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-serif">{totalUsers}</p>
              </div>
              <div>
                <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-roboto">Returning Users</h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-serif">{returningUsers}</p>
              </div>
              <div>
                <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-roboto">Total Clicks</h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-medium font-serif">{totalClicks}</p>
              </div>
              <div>
                <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-roboto">Total Templates</h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-serif">{templateCounts}</p>
              </div>
              <div>
                <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-roboto">Most Clicked Component</h2>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-serif">{mostClickedComponent.componentName}</p>
                <div className="flex items-center mt-1">
                </div>
              </div>
              <div>
                <span className="font-serif">Count: {mostClickedComponent.count}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsCards;
