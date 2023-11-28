
import { useState } from 'react';
import axios from 'axios';
  // @ts-ignore
import varkeys from '../constants/keys.tsx';

var formData = new FormData();
const url =varkeys.APP_URL;
const SearchInput=({setShowModal}:any)=>{
const [title,setTitle]=useState('');
const [startDate,setStartDate]=useState('');
const [endDate,setEndDate]=useState('');
const [file,setFile]=useState('');
const [project,setProject]=useState('');
const [description,setDescription]=useState('');
const [priority,setPriority]=useState('');
const [selectedOption,setSelectedOption] =useState ('')





const inputArr = [
  {
    type: "text",
    id: 1,
    value: ""
  }
];

const [arr, setArr] = useState(inputArr);

const addInput = () => {
  setArr((s:any) => {
    return [
      ...s,
      {
        type: "text",
        value: ""
      }
    ];
  });
};

    formData.append("title",title);
    formData.append("startDate",startDate);
    formData.append("endDate",endDate);
      // @ts-ignore
    formData.append("fileAttachment",file);
      // @ts-ignore
    formData.append("assignees",inputArr);
    formData.append("project",project);
    formData.append("description",description);
    formData.append("priority",selectedOption);

    function handletitle(e:any){
       setTitle(e.target.value);
    }

    function handleEnddate(e:any){
      setEndDate(e.target.value);
   }

   function handleStartDate(e:any){
    setStartDate(e.target.value);
   }
   function handleProject(e:any){
    setProject(e.target.value);
   }
   
   function handleDescription(e:any){
     setDescription(e.target.value);
   }
   function handlePriority(e:any){
     setPriority(e.target.value);
   }

   
    const handleFileUpload = (e:any) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      const allowedTypes = ['application/pdf'];

      if (allowedTypes.includes(uploadedFile.type)) {
        setFile(uploadedFile);
      } else {
        
      }
    }
  };
  



	

	const createtask= async (e:any) => {
		e.preventDefault();
		try {
		  const response = await axios.post(`${url}/api/task/create/`,formData);
		   console.log(response)
		  if(response.status==200){
		
		  }
		} catch (error:any) {
			console.error("errre",error.message);
		//   setError(error.response.data.message);
		} finally {
	   
		}
	  };



 

  
  const handleChange = (e:any) => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };


const handleOptionChange= (changeEvent:any)=> {
   setSelectedOption(changeEvent.target.value)
}


    return(
    <>
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
    <h1>create Task </h1>
    <form onSubmit={createtask}  className="relative flex w-full flex-wrap items-stretch mb-3">

    <label htmlFor="title">Name</label>
    <input type="text" value={title}  onChange={(e)=>handletitle(e.target.value)}  name='title' placeholder="Task Name" className="px-2 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>

    <div className='flex relative w-full pt-3 space-x-3'>

     <div className='w-[50%]'>
     <label htmlFor="startdate">Start Date</label>
    <input type="date" name='startdate'  value={startDate}  onChange={(e)=>handleStartDate(e.target.value)}  className="px-2 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
     </div>

     <div className='w-[50%]  '>
     <label htmlFor="enddate">End Date</label>
     <input type="date" name='enddate'  value={endDate}  onChange={(e)=>handleEnddate(e.target.value)}  className="px-2 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
     </div>     
     </div>

     <div className=' relative w-full pt-3 space-x-3'>
      <h1>Assignee</h1>
      <h1 className=' flex w-[50%]'>{arr.map((item, i):any => {
        return (
          <input
            onChange={handleChange}
            value={item.value}
         // @ts-ignore
            id={i}
            type={item.type}
             // @ts-ignore
            size="20"
          />
        );
      })} <button type='button' onClick={addInput}>+</button>
      </h1>
      <div>
      
    </div>
     </div>
     <label htmlFor="project">Project</label>
    <input type="text" name='project'  value={project}  onChange={(e)=>handleProject(e.target.value)} placeholder="Project Name" className="px-2 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>

    <label htmlFor="description">Description</label>
    <input type="text" name='description'  value={description}  onChange={(e)=>handleDescription(e.target.value)} placeholder="Add more detail to this task" className="px-2 py-4  h-20 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
     
     <div className='mt-3'>
     <label htmlFor="priority">Priority </label><br />
    <div className='flex space-x-4' >
    <div className="radio">
      <label>
        <input type="radio" value="low" 
                      checked={selectedOption === 'low'} 
                      onChange={handleOptionChange} />
        Low
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="normal" 
                      checked={selectedOption === 'normal'} 
                      onChange={handleOptionChange} />
        Normal
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="high" 
                      checked={selectedOption === 'high'} 
                      onChange={handleOptionChange} />
        High
      </label>
    </div>
    </div>

    </div> <br />
   

    <div className='flex w-full mt-3'>
     <input type="file" name="attach" value={file} onChange={(e)=>handleFileUpload(e.target.value)} id="file" />  
     <div className='flex space-x-2'>
     <button
                      className="text-black  hover:text-indigo-200 right-0 active:bg-[white] font-bold uppercase text-sm px-1 py-1  rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
              cansel        
    </button>
    <button
                      className="text-white  hover:text-indigo-200 right-0  active:bg-secondary1 bg-secondary1 font-bold uppercase text-sm px-1 py-1 absolute rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
            Submit       
    </button>

    </div>
    

    </div>

    </form>
  </div>
    </>
    )
  }

  export default SearchInput
  