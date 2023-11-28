
import { userFields } from '../constants/Formfield';
import { useEffect,useState } from 'react';
import Input from '../components/auth/userinput';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import varkeys from '../constants/keys';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const url =varkeys.APP_URL;
const   UserLogin =({ selected, selectedTab }:any)=>{
    const navigate = useNavigate()
	const [error ,setError]= useState(null);
	const [loading,setLoading]=useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	  });

	const handleChange = (e:any) => {
		setFormData({
		  ...formData,
		  [e.target.name]: e.target.value,
		});
	  };

	const login = async (e:any) => {
		e.preventDefault();
		try {
		  const response = await axios.post(`${url}/api/user/login/`,formData);
		   console.log(response)
		  if(response.status==200){
			Cookies.set('token', response.data.token, { expires: 7 });
			 navigate('/profile')
		  }
		} catch (error) {
			console.error("errre",error);
		//   setError(error.response.data.message);
		} finally {
		  setLoading(true);
		}
	  };

    return (
        <>
    
	<div className='flex flex-row items-center w-screen h-screen justify-center p-9 space-x-0 md:space-x-0'>        
           
			<div className="flex flex-col text-white justify-center  items-center rounded-2xl w-full  md:w-2/5 bg-primary p-9">
				<div className="flex flex-col justify-center w-full px-3 md:w-4/5 h-4/5">
					<h3 className="my-2 text-2xl font-bold  text-left text-yellow">
						User Login
					</h3>
					<form onSubmit={login}  id="signupForm">
						{userFields.map((field) => (
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
							className="flex bg-secondary1 items-center justify-center p-1  rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
						>
                        Login
                        </button>
					</form>
					<div className="flex flex-row space-x-3 py-2 my-2">
						<p>Don't have an account?</p>
						<NavLink  to="/register" onClick={()=>selectedTab("register")}  className="underline text-lightBlue">
							Signup
						</NavLink>
						<NavLink  to="/ForgotPassword" className="underline text-lightBlue">
							Forgot password
						</NavLink>
					</div>
				</div>
			</div>

      </div>
         
        </>
    )
     
}

export default UserLogin;






