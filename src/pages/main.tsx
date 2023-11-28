import User from "../components/userChanner"
const MainDashboard=()=>{
   
    
    return(
        <div className=" pb-10  " >
      

        <div className="  bg-indigo-200  p-4 sm:p-6  rounded-sm   h-fit w-[100%]  ">
        
           <h1 className=" text-3xl font-bold ">Wellcome to Task Managment Dashboard 👋</h1>
        </div>

        <div className="mt-10  flex  flex-col h-[400px] justify-between  w-[100%] md:flex-row">
                
             <div className="bg-blue w-full md:w-[100%] flex shadow-md rounded-sm justify-center pr-0  mt-5 md:mt-0  "> 
                    <User  cardheader="Tasks" style="pb-1   bg-white" >
          
                    </User>
             </div>

             

        </div>


        
        </div>
    )
}

export default MainDashboard