
import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UilAngleDown,UilAngleUp } from '@iconscout/react-unicons';


import { useLocation } from 'react-router-dom';

 

type SidebarLinkProps = {
  to: string;
  icon: React.FC<{ size: string; color: string, onClick: () => void  }>;
  itemname: string;
  sublinks?: { to: string; itemname: string; className?: string }[];
  className?: string;
  iconcolor:string,
  ismenuopen:boolean,
  onclick: () => void;
  children: ReactNode
  
};

const SidebarLink: React.FC<SidebarLinkProps> = ({children,to,icon: Icon,iconcolor, itemname, sublinks,className,ismenuopen, onclick }) => {
  const [isOpen, setIsOpen] = useState(false);


  const location = useLocation();
const isActive = location.pathname === to;



  return (
    <div className={` px-2 py-2 mt-3 ${ className }`}>
      <span
        className='flex justify-between items-center cursor-pointer'
        onClick={() => sublinks && setIsOpen(!isOpen)}
      >
        <span className='flex items-center'>
          {Icon && <Icon size='30' color={iconcolor}  onClick={onclick} />}
          <h1 className={`text-white ml-2 ${ismenuopen&&'hidden'}`} >{itemname}</h1>
        </span>
        {isOpen?( sublinks &&!ismenuopen &&< UilAngleUp size='30' color='#64758b'  />):
        !ismenuopen &&<UilAngleDown size='30' color=' #64758b' onClick={()=>{}} />
        }
        
      </span>

      {isOpen && sublinks && (
        <ul className= {`ml-6 ${ ismenuopen&&'hidden'}`}>
          {sublinks.map((sublink) => (
            <li key={sublink.to}>
              <NavLink to={sublink.to}
               className={`ml-3 text-sm text-text2 hover:text-white ${sublink.className || ''}`} 
            >
                {sublink.itemname}

                {children}
               
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};






export default SidebarLink;



