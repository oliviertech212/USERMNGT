



import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import Sidebar from "../pages/sidebar";

import MainDashboard from "../pages/main";
import Users from "../pages/Users";

const DashboardRoutes=({toggleSidebar,IsmenuOpen}:any)=>{

   
    return(

        <>  
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={IsmenuOpen}>
        <Routes>
                <Route path="/dashboad" element={<MainDashboard/>} />
                <Route path="/users" element={<Users />} />
        </Routes>

        </Sidebar>
        
       
       
        </>

    )
}

export default DashboardRoutes;




