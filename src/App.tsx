import * as React from "react";

import {Routes,Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import AllRoutes from "./routes/routes";



function WrappedApp(){
  return(
    <>
      {/* <AllRoutes/> */}
      <Dashboard/>
    </>
    

  )
}
export default WrappedApp;
