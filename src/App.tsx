import AnalyticsCards from "./Components/AnalyticsCards"
import AnalyticsFilter from "./Components/AnalitycsFilter"
import AnalyticsTable from "./Components/AnalyticsTable"

function App() {

  return (
    <>
     <div className="w-screen h-screen bg-[#101010] ">
        {/* <CardAnalytics/> */}
        <div className="flex flex-col justify-center items-center p-10 pl-10 pr-10">
<AnalyticsFilter/>
        <AnalyticsCards/>
 
        </div>
<div className=" w-full bg-green-200 flex  ">
<AnalyticsTable/>
</div>
     
     </div>

    </>
  )
}

export default App
