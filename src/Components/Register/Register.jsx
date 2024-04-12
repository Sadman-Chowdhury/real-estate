
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className="text-3xl my-10 text-center underline">Please Register</h2>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row shadow-2xl'>
                <form className="card-body w-full lg:w-1/2 justify-center">
                <div className="form-control">
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn border-green-300 bg-white text-green-600">Register</button>
                        </div>
                    </form>
                    <div className='w-full lg:w-1/2'>
                        <img className='w-full' src="https://i.ibb.co/HNHZfZR/register.jpg" alt="" />
                    </div>
                </div>
                <p className="text-center mt-5">Already have an account?<Link className="ml-2 text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;