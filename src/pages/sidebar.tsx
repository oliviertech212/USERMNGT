import React,{ useState ,  ReactNode} from "react";
import SidebarLink from "../components/Sidebar";
import { UilDashboard } from '@iconscout/react-unicons';
import { UilShoppingBag } from '@iconscout/react-unicons';
import { IoIosPeople } from 'react-icons/io';
import {BiLeftIndent} from 'react-icons/bi';
import {BsTextIndentLeft} from 'react-icons/bs';
// import {AiOutlineCloseSquare} from 'react-icons/ai'
import {AiOutlineCloseSquare,AiOutlineMenuFold} from 'react-icons/ai'


type checksidebar={
  isSidebarOpen: boolean
  toggleSidebar:()=>void
  children: ReactNode;
}

const Sidebar = ({isSidebarOpen, toggleSidebar , children}:checksidebar) => {
  const [ismenuOpen, setIsmenuOpen] = useState(false)

  return (
    <>
     <div className={`${isSidebarOpen?'hidden md:block':''} bg-primary py-3 px-5  fixed top-0 bottom-0 left-0 z-20 ${ismenuOpen?"w-[100px]":"w-[250px]"}`}>
      <div className="flex justify-between items-center ">
      <h1 className={`mb-5 font-sans text-3xl text-secondary1 ${ismenuOpen && 'hidden'} `}>TaskMNGT</h1>
       
          <span className="hidden md:block">
          <AiOutlineMenuFold size={30} className={` mr-0 mb-5 text-[#64758b] hover:text-secondary1 ${ismenuOpen && 'hidden'} `} onClick={()=>setIsmenuOpen(true)} />
          <BsTextIndentLeft size={30}  className={` mr-0 mb-5 text-[#64758b] hover:text-secondary1 ml-2 ${!ismenuOpen && 'hidden'} `} onClick={()=>setIsmenuOpen(false)} />
        </span>

        <span className="block md:hidden">
          <AiOutlineCloseSquare size={30}  className={` mr-0 mb-5 text-[#64758b] hover:text-secondary1 ml-2 ${ismenuOpen && 'hidden'} `} onClick={toggleSidebar} />
        </span>


      
     
      </div>
      
      <h1 className='px-2 mb-2 text-sm text-text2'>PAGES</h1>
      <SidebarLink
        to="/"
        icon={UilDashboard}
        itemname="Dashboard"
        sublinks={[
          { to: '/dashboad', itemname: 'All Tasks', className:"" },
        ]}
        className={`${!ismenuOpen&&'bg-secondary'}`}
        iconcolor=' #6466f1'
        ismenuopen={ismenuOpen}
        onclick={()=>setIsmenuOpen(false)}

      >

        

      </SidebarLink>
     



      <SidebarLink
        to="/"
        icon={ IoIosPeople}
        itemname="Users"
        sublinks={[
          { to: '/users', itemname: 'Users', className:"" }
        ]}
        iconcolor='#64758b'
        ismenuopen={ismenuOpen}
        onclick={()=>setIsmenuOpen(false)}
        // iconcolor=' #6466f1'
      >
         </SidebarLink>
    </div>

    <main className={` bg-light-bg-second  py-5 mb-0 flex-row px-[5%] justify-center h-full   overflow-auto   ${ismenuOpen?"md:ml-[100px]":"ml-0  md:ml-[250px] absolute bottom-0 top-16 right-0 left-0  z-0 "}`}>
      {children}
    </main>
    </>
   
  );
};

export default Sidebar;