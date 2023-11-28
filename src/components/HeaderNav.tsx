

import React, { useEffect, useState } from 'react';
import { UilBars } from '@iconscout/react-unicons';
  // @ts-ignore
import SearchInput from './SearchInput';


const SearchModel=({ setShowModal,showModal}:any)=>{
  
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  m-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-[90%]  my-6 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                <div className="flex items-start justify-between p-5  rounded-t">
                   
                 

                  <SearchInput setShowModal={setShowModal}/>
  
                </div>
               
                <div className="">
  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}



const Headernav=({toggleSidebar,ismenuOpen}:any)=>{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showModal, setShowModal] = React.useState(false);



  function handleModel(){
    setShowModal(!SearchModel)
  }


   
  

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width:768px)');
    
        function handleScreenChange(event:any) {
          setIsSmallScreen(event.matches);
        }
    
        mediaQuery.addEventListener('change', handleScreenChange);
        handleScreenChange(mediaQuery);
    
        return () => {
          mediaQuery.removeEventListener('change', handleScreenChange);
        };
      }, []);


    return(
        <>
        <nav className="flex px-5  items-center justify-between sm:px-10  border shadow-lg py-3 w-screen fixed top-0 h-16 bg-light-bg  z-10  ">
           <span className=' bg-[#e2e8f0] '>
           <UilBars size={isSmallScreen ? "25" : "40"} color='#6466f1' onClick={ toggleSidebar } className={` hover:text-secondary1 `} />
           </span>

           <div className=' flex items-center'>
            <SearchModel  setShowModal={handleModel} showModal={showModal} />
            <span className=' bg-secondary1 rounded-full p-0 mx-2'>
            <button className='flex  items-center justify-center p-1  rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28' onClick={()=> setShowModal(true)}>
             Create Task
            </button>
            </span>
           </div>
          
        </nav>

        </>
    )
}


export default Headernav