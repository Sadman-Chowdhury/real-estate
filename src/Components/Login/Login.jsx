import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result=>{
            console.log(result.user)
            setLoginSuccess(toast.success('Login successful'))
            navigate('/')
        })
        .catch(error=>{
            console.error(error)
            setLoginError(toast.error('There is no such user. Check email and password'))
        })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Helmet>
                <title>Login | Dream Land</title>
            </Helmet>
            <div>
            <h2 className="text-5xl my-10 text-center font-extrabold">Login!</h2>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row shadow-2xl'>
                <div className="w-full lg:w-3/5 text-center justify-center">
                <form onSubmit={handleLogin} className="card-body justify-center mt-10">
                        <div className="form-control">
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control">
                        <input className="input input-bordered" placeholder="Password" type={showPassword ? "text" : "password"} name="password" id="" required/>
                        <span className="absolute top-3 right-3" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOff /> : <IoEye />
                            }
                            </span><br />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn border-green-300 bg-white text-green-600">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <button className="border w-1/2 inline-flex gap-5 rounded-lg p-4 bg-blue-100 font-bold"><FcGoogle className="text-2xl ml-10"/>Login with Google</button>
                        <button className="border w-1/2 inline-flex gap-5 rounded-lg p-4 bg-gray-200 font-bold"><BsTwitterX className="text-2xl ml-10"/>Login with X</button>
                    </div>
                </div>
                    <div className='w-full lg:w-2/5'>
                        <img className='w-full' src="https://i.ibb.co/Q8bdwny/login.jpg" alt="" />
                    </div>
                </div>
                {
                    loginError && <p className="text-red-600">{loginError}</p>
                }
                {
                    loginSuccess && <p className="text-green-600">{loginSuccess}</p>
                }
                <p className="text-center mt-5">Do not have an account?<Link className="ml-2 text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
        </div>
    );
};

export default Login;