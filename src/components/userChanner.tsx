

import {ReactNode} from 'react';


type prop ={
  cardheader:string
  style?:string,
  children:ReactNode,
  // channelData:any
}

const User=({cardheader,style,children}:prop)=>{

    return(

        <>
        <div className={` ${style} w-[100%]  shadow-sm rounded-sm pt-3  `}>
        <h1 className='h-[10%] ml-2 mr-2 '>{cardheader}</h1>
        <hr className='w-full mt-2 mb-2'/>
         {children}
        </div>
        </>
    )


}

export default User