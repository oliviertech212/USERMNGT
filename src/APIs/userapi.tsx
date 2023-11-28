
import React,{useState,useEffect} from "react"
import axios from "axios"

const url="https://fakeapi-zsfb.onrender.com"


const Alluserdata=()=>{

    const [user,setUser]=useState(null)

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

     console.log("Success",user);
     
    return(
    <>
    </>
    )
}

export default Alluserdata