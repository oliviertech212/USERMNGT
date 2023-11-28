
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import varkeys from '../constants/keys';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {jwtDecode }from 'jwt-decode';
const url =varkeys.APP_URL;
const  UserProfile =({ selected, selectedTab }:any)=>{
    const navigate = useNavigate()
          const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
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
              })
            //   .then(response => {
            //     console.log(response);
            //   });
            // @ts-ignore
              if (decodedToken.exp * 1000 > Date.now()) {
                navigate('/profile');
              } else {
                Cookies.remove('token', { path: '/' });
              }
              setUserProfile(userProfileResponse?.data?.user?.email);
            } else {
              setUserProfile(null);
            }
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        };
      
        handleToken();
      }, []); 

      console.log(userProfile,"Token")

    return (
        <>

      <div className='flex flex-row items-center w-screen h-screen justify-center p-9 space-x-0 md:space-x-0'>        
           
			<div className="flex flex-col text-white justify-center  items-center rounded-2xl w-full  md:w-2/5 bg-primary p-9">
				<div className="flex items-center flex-col justify-center w-full px-3 md:w-4/5 h-4/5">
					<h3 className="my-2 text-2xl font-bold w-auto  text-left text-yellow">
						{userProfile}
					</h3>
                    <button>
                        Edit Profile
                    </button>
					
				</div>
			</div>

      </div>
         
        </>
    )
     
}

export default UserProfile;






