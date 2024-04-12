import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login | Dream Land</title>
            </Helmet>
            <div>
            <h2 className="text-5xl my-10 text-center font-extrabold">Login!</h2>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row shadow-2xl'>
                <div className="w-full lg:w-3/5 text-center justify-center">
                <form className="card-body justify-center mt-10">
                        <div className="form-control">
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                <p className="text-center mt-5">Do not have an account?<Link className="ml-2 text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
        </div>
    );
};

export default Login;