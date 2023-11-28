declare module '@iconscout/react-unicons' {
    import React from 'react';
  
    // Define the type for the UilBars component
    export const UilBars: React.FC<{ size: string; color: string; onClick: () => void ;className:string }>;
    export const UilSearch :React.FC<{ size: string; color:string;  onClick: () => void }>;
   export const UilBell: React.FC<{ size: string; color:string; onClick: () => void }>;
   export const UilExclamation: React.FC<{ size: string; color:string; onClick: () => void}>;
   export const UilSun: React.FC<{ size: string ;color:string}>;
   export const UilAngleDown: React.FC<{ size: string; color:string; onClick: () => void }>;
   export const  UilAngleUp: React.FC<{ size: string; color:string;}>;
    
   export const UilDashboard:React.FC<{ size: string ;color:string}>;
    export const UilShoppingBag:React.FC<{ size: string ;color:string}>;

  }
  