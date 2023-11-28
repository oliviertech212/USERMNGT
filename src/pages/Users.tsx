
  import React,{useState,useEffect} from "react"
import axios from "axios"
  import User from "../components/userChanner"
  
const url="https://fakeapi-zsfb.onrender.com"
const  Users=()=>{
    const [user,setUser]=useState([])
      useEffect(()=>{
        axios.get(`${url}/users`).then((response)=>{
            if(response.status === 200){
                setUser(response.data)
            }
        }
        ).catch((error)=>{
            console.log(error);
            
        })
    },[]) 

    if(user!==null)
    console.log("users",user);


    const Table = ({Users,channelData}:any) => {

      return (
        <table className='w-[98%] m-auto'>
          <thead className='bg-light-bg-second h-11'>
            <tr className='w-[100%] py-3'>
              <td>{Users}</td>
            </tr>
          </thead>
          <tbody>
            {channelData.length!==0&& channelData?.map((data:any, index:any) => (
              <tr key={index} className=' h-11 border-b-2 mt-2'>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

    
    
    return(
        <>
        <div className="mt-10  flex flex-col pb-10  justify-between  w-[100%] md:flex-row">    
             <div className=" w-full md:w-[100%] flex shadow-md rounded-sm justify-center   "> 
                    <User   cardheader="Users" style="pb-10 bg-white" >
      
                    </User>
             </div>

             

        </div>
        </>
    )
}

export default  Users