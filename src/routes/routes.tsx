
import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';

 import Userregister from "../pages/userRegister";
import UserLogin from "../pages/userLogin";
import { Header } from "../components/Nav";
import UserProfile from "../pages/userprofile";

const AllRoutes=()=>{
    const [selected,setSelected]=useState("login");
    const selectedTab=(tab:any)=>{
     setSelected(tab);
    }
    return(
        <>
       
        <Header  selected={selected} selectedTab={selectedTab} />
        <Routes> 
                <Route path='/profile' element={<UserProfile />} />
                <Route path="/register" element={<Userregister selected={selected} selectedTab={selectedTab}   />} /> 
                <Route path="/login" element={<UserLogin selected={selected} selectedTab={selectedTab} />} />   
        </Routes>
        
       
      </>

    )
}

export default AllRoutes;