

import React,{useEffect,useState} from "react";
import Headernav from "../components/HeaderNav"
import DashboardRoutes from "../dashroutes/Allroutes";


const Dashboard=({})=>{
    const [showmenu, setShowMenu] = useState(false);
    

    const toggleSidebar =()=>{
        setShowMenu(!showmenu);
    }
   
    return(

        <>
        <Headernav  toggleSidebar={toggleSidebar} ismenuOpen={showmenu} />
        <DashboardRoutes toggleSidebar={toggleSidebar} IsmenuOpen={showmenu}/>
       
        </>

    )
}

export default Dashboard;