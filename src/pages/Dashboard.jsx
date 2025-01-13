import { useState,useEffect } from "react"

import { useLocation } from "react-router-dom"
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";

const Dashboard = () => {
  const location = useLocation();
  const [tab,setTab]=useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl=urlParams.get('tab');
    if (tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search]);
  return (
    <div>
      <div className="">
        {/* Sidebar */}
        <DashSidebar/>
      </div>
        {/* profile */}
        {tab==='profile'&&<DashProfile/>}
    </div>
  )
}

export default Dashboard