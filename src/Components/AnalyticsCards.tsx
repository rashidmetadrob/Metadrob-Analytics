import { useEffect, useState } from "react"
import { getClicksAnalyticsFunction, getMostClickedComponentFunction, getUserAnalyticsFunction } from "../Utils/Api/Methords/getMethord"


const AnalyticsCards = () =>{

const [totalUsers,setTotalUsers]=useState(0)
const [returningUsers,setReturningUsers]=useState(0)
const [totalClicks,setTotalClicks]=useState(0)
const [clickPerSession,setClickPerSession]=useState(0)
const [mostClickedComponent,setMostClickedComponent]=useState({
  componentName:"",
  count:0
})




const getUserAnalytics= async ()=>{
  const response= await getUserAnalyticsFunction()

  
  if(response.status){
   
    setTotalUsers(response.data.totalUsersCount)
    setReturningUsers(response.data.returningUsersCount)
  }else{
    alert(response.message)
  }
} 

const clicksAnalitics= async ()=>{
  const response= await getClicksAnalyticsFunction()
  if(response.status){

    setTotalClicks(response.data.totalClicks)

  }
}

const getMostClikedComponent= async()=>{
  const response= await getMostClickedComponentFunction()
  if(response.status){

    const name=response.data._id
    setMostClickedComponent({componentName:name,count:response.data.count})
  }

}

// useEffect(()=>{
// //total users
// //returing users
// getUserAnalytics()

// //total clicks
// //click per session 
// clicksAnalitics()

// //most clicked compoinets with count
// getMostClikedComponent()


// },[])



  return(

    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mx-auto max-w-screen-xl ml-6 mr-6">

  <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">

    <div className="flex justify-between items-center">
      <h2 className="text-xs font-roboto">Total User</h2>
    </div>
    

    <div className="flex justify-between items-center">

      <div>
        <p className="text-2xl font-serif">264K</p>
        <div className="flex items-center mt-1">
          <span className="text-green-500 font-roboto text-xs">▲ 3.48%</span>
        </div>
      </div>
      
 
      <div>
        <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24">
          <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
        </svg>
      </div>
    </div>
  </div>
  <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">

    <div className="flex justify-between items-center">
      <h2 className="text-xs font-roboto">Total User</h2>
    </div>
    

    <div className="flex justify-between items-center">

      <div>
        <p className="text-2xl font-serif">264K</p>
        <div className="flex items-center mt-1">
          <span className="text-green-500 font-roboto text-xs">▲ 3.48%</span>
        </div>
      </div>
      
 
      <div>
        <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24">
          <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
        </svg>
      </div>
    </div>
  </div>

  <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">

    <div className="flex justify-between items-center">
      <h2 className="text-xs font-roboto">Total User</h2>
    </div>

    <div className="flex justify-between items-center">
  
      <div>
        <p className="text-2xl font-medium font-serif">264K</p>
        <div className="flex items-center mt-1">
          <span className="text-green-500 font-roboto text-xs">▲ 3.48%</span>
        </div>
      </div>
      
  
      <div>
        <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24">
          <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
        </svg>
      </div>
    </div>
  </div>


  <div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">

<div className="flex justify-between items-center">
  <h2 className="text-xs font-roboto">Total User</h2>
</div>


<div className="flex justify-between items-center">

  <div>
    <p className="text-2xl font-serif">264K</p>
    <div className="flex items-center mt-1">
      <span className="text-green-500 font-roboto text-xs">▲ 3.48%</span>
    </div>
  </div>
  

  <div>
    <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24">
      <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
    </svg>
  </div>
</div>
</div>

<div className="bg-black rounded-lg p-4 shadow-lg text-white flex flex-col space-y-4">

<div className="flex justify-between items-center">
  <h2 className="text-xs font-roboto">Total User</h2>
</div>


<div className="flex justify-between items-center">

  <div>
    <p className="text-2xl font-serif">264K</p>
    <div className="flex items-center mt-1">
      <span className="text-green-500 font-roboto text-xs">▲ 3.48%</span>
    </div>
  </div>
  

  <div>
    <svg className="w-20 h-12 sm:w-24 sm:h-16" fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24">
      <path d="M2 12c2 1 4 4 6 4s4-3 6-4 4 1 6 4"></path>
    </svg>
  </div>
</div>
</div>
</div>

    </>
  )
}
export default AnalyticsCards