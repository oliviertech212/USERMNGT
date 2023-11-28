
import { userFields } from '../constants/Formfield.js';
import Input from '../components/auth/userinput.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
// @ts-ignore
import varkeys from '../constants/keys.tsx';
import { ColorRing } from 'react-loader-spinner';


const url =varkeys.APP_URL;


const   Userregister =({ selected, selectedTab }:any)=>{
	const [error ,setError]= useState(null);
	const [loading,setLoading]=useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	  });

	useEffect(()=>{

	})

	const handleChange = (e:any) => {
		setFormData({
		  ...formData,
		  [e.target.name]: e.target.value,
		});
	  };

	const register = async (e:any) => {
		e.preventDefault();
		try {
		  const response = await axios.post(`${url}/api/user/register/`,formData);
		  
		} catch (error:any) {
		  console.error("errre",error.response.data.message);
		  setError(error.response.data.message);
		} finally {
		  setLoading(true);
		}
	  };
    return (
        <>
    
      <div className='flex flex-row items-center w-screen h-screen justify-center p-9 space-x-0 md:space-x-0'>
        
            {/* <div className="items-center justify-center hidden w-2/5 md:3/5 md:flex">
				<div className="w-9/12" />
			</div> */}
			<div className="flex flex-col text-white justify-center items-center rounded-2xl  w-full  md:w-2/5 bg-primary p-9">
				<div className="flex flex-col justify-center w-full px-3 md:w-4/5 h-4/5">
					<h3 className="my-2 text-2xl font-bold  text-left text-yellow">
						Create Account
					</h3>
					<form  onSubmit={register} id="signupForm">
						{userFields.map((field:any) => (
							<Input
								key={field.id}
								placeholder={field.placeholder}
								type={field.type}
								id={field.id}
								name={field.name}
								isRequired={field.isRequired}
								labelText={field.labelText}
								labelFor={field.labelFor}
								autoComplete={field.autoComplete}
								// @ts-ignore
								value={formData[field.name]}
                                handleChange={handleChange}
								className="w-11/12 px-2 py-2 my-2 rounded-md text-black appearance-none"
							/>
						))}
						<button
							 type='submit'
							className="flex bg-secondary1 items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
						>
                        Register
                        </button>
					</form>
					<div className="flex flex-row space-x-3 py-2 my-2">
						<p>Already have an account?</p>
						<NavLink  to="/login" onClick={()=>selectedTab("login")}  className="underline text-lightBlue">
							Login
						</NavLink>
					</div>
				</div>
			</div>

      </div>
         
        </>
    )
     
}

export default Userregister;






