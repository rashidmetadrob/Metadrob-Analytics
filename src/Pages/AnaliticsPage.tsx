import AnalyticsFilter from "../Components/AnalitycsFilter"
import AnalyticsGraph from "../Components/AnaluticsGraph"
import AnalyticsCards from "../Components/AnalyticsCards"
import AnalyticsTable from "../Components/AnalyticsTable"

const AnalyticsPage= ()=>{
    return (
        <>
        <div className="w-screen h-auto bg-[#101010]">
      <div className="flex flex-col items-center p-2 sm:p-2 md:p-2 lg:p-2 ">
        <div className="w-full max-w-screen-lg px-4 sm:px-6 md:px-8 lg:px-10 ">
          <AnalyticsFilter />
          <AnalyticsCards />
        </div>
      </div>
      <div className="w-full flex justify-center p- sm:px-6 md:px-8 lg:px-16">
        <div className="w-full max-w-screen-lg">
          <AnalyticsTable />
        </div>
      </div>
      <div className="w-full flex justify-center p- sm:px-6 md:px-8 lg:px-16">
        <div className="w-full max-w-screen-lg">
          <AnalyticsGraph />
        </div>
      </div>
      <div className="w-full flex justify-center p- sm:px-6 md:px-8 lg:px-16">
        <div className="w-full max-w-screen-lg">
          {/* <AnalyticsEngagement /> */}
        </div>
      </div>
    </div>
        </>
    )
}

export default AnalyticsPage