import { useEffect, useState } from "react"
import { getUserData, setUserData } from "../Utils/Storage/LocalStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const navigate=useNavigate()
    useEffect(() => {
        const user = getUserData();
        if (user && user.userLoggedIn) {
          // Redirect to the protected page if already logged in
          navigate('/');
        }
      }, [navigate]);
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const { email, password } = formData;
      
        // Check if both email and password are typed (non-empty)
        if (!email || !password) {
        toast.error("Both email and password are required.")
          
          return;
        }
      
        // Check for correct email and password
        if (email === 'analytics@metadrob.com' && password === 'Analytics@123') {
          const data = {
            userLoggedIn: true,
          };
          
          // Save user login status in localStorage
          setUserData(data);
          navigate('/')
         
          toast.success("Login successful!")
        } else {
            toast.error("Invalid email or password.")
        
        }
      };

    return (
        <>
        <div className="flex justify-center items-center w-screen h-screen fixed " 
         style={{ backgroundImage: `url("Login Page Background.jpeg")` }}>
<div className="w-11/12  md:w-4/12 h-3/4 bg-black  rounded-md flex flex-col justify-between items-center">
<div className="flex w-full  flex-col justify-center  p-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form   className="flex flex-col gap-10  w-full h-full " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-3 font-roboto sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-3 font-roboto sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full h-full my-16">
              <button
               
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Welcome To Dashboard
              </button>
            </div>
          </form>

          
        </div>
      </div>

</div>
        </div>
        </>
    )
}

export default Login