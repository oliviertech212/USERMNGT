
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {jwtDecode }from 'jwt-decode';
import axios from 'axios';
import { FaUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import varkeys from '../constants/keys';
import { IoMdArrowDropdown } from "react-icons/io";

const url =varkeys.APP_URL;


export const Header = ({ selected, selectedTab }:any) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
const [userProfile, setUserProfile] = useState(null);
const navigate= useNavigate();

function handleopenprofile(){
  setIsProfileOpen(!isProfileOpen);
}

   const handleLogout = async ()  => {
    try {
      const token = Cookies.get('token');
      Cookies.remove('token', { path: '/' });
      if(token){
        navigate('/login');
      }
     
    } catch (error:any) {
      console.log(error.message);
    }
       
       
    };

useEffect(() => {
  const handleToken = async () => {
    try {
      const token = Cookies.get('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const userProfileResponse = await axios.get(`${url}/api/user/profile`, {
          headers: {
            token: `${token}`,
          },
        });
        // @ts-ignore
        if (decodedToken.exp * 1000 > Date.now()) {
          navigate('/profile');
        } else {
          Cookies.remove('token', { path: '/' });
        }
        setUserProfile(userProfileResponse.data);
      } else {
        setUserProfile(null);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  handleToken();
}, []); 



    
    return (
        <nav className="flex px-5  items-center justify-between sm:px-10  border  py-3 w-screen fixed top-0 h-16 bg-light-bg  z-10  ">

        <div  >
          <NavLink to="/" className={`bg-primary text-[white] text-xl`} >
        
          </NavLink>
        </div>
        
        <div className='flex'>
        <div className={` ${!isProfileOpen&& 'hidden' } fixed w-40  border border-[#e2e8f0] shadow-sm  right-5 top-12 rounded-sm bg-light-bg py-3 `}>
            
            <NavLink to="/profile" className={`bg-primary text-[white] text-xl`} >
            <h1  className='text-md mx-3 text-secondary1 hover:text-indigo-200 cursor-pointer '>Settings</h1>
            </NavLink>
            <h1 onClick={handleLogout}  className='text-md mx-3 text-secondary1 hover:text-indigo-200 cursor-pointer ' >Sign Out</h1>

           </div>
        {userProfile ? (
          <>
          <div className="flex items-center ml-3 text-primary">
            <FaUser />
          </div>
          <span className=' flex items-center '>
          
            <IoMdArrowDropdown  size="20" color="#374151" onClick={()=>handleopenprofile()} />
            </span>
         
          </>
        ):(
          <>
        <div onClick={()=>selectedTab("login")} className={`flex  mr-3  ${selected=="login" && "bg-secondary1 text-white" }   items-center justify-center p-1  rounded-2xl  bg-primaryGreen  font-bold my-2 w-28`}>
          <NavLink to="/login" >
            Login
          </NavLink>
        </div>

        <div onClick={()=>selectedTab("register")} className={` flex  px-10    ${selected=="register" && "bg-secondary1 text-white" } items-center justify-center p-1 rounded-2xl bg-primaryGreen font-bold my-2 w-28  `} >
          <NavLink to="/register" >
            Register
          </NavLink>
        </div>
        </>
        )

        }



        </div>
       

        
      </nav>
    );
  };