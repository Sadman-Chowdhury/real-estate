
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const {createUser, setUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        //password error
        if(password.length<6){
            toast.error('Password should be atleast 6 characters')
            return
        }else if(!/[A-Z]/.test(password)){
            toast.error('Password should have atleast one Uppercase')
            return
        }else if(!/[a-z]/.test(password)){
            toast.error('Password should have atleast one Lowercase')
            return
        }

        try {
            // Create user and update profile
            const result = await createUser(email, password);
            const user = result.user;
            console.log(user);
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
            
            setUser({
                ...user,
                displayName: name,
                photoURL: photo
            });
            
            setRegisterSuccess(toast.success('User created successfully'));
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error(error);
            setRegisterError(toast.error('Error creating user'));
        }
    }

    return (
        <div>
            <ToastContainer/>
            <Helmet>
                <title>Register | Dream Land</title>
            </Helmet>
            <h2 className="text-3xl my-10 text-center underline font-extrabold">Please Register</h2>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row shadow-2xl'>
                <form onSubmit={handleRegister} className="card-body w-full lg:w-1/2 justify-center">
                <div className="form-control">
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
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
                        <button className="btn border-green-300 bg-white text-green-600">Register</button>
                        </div>
                    </form>
                    <div className='w-full lg:w-1/2'>
                        <img className='w-full' src="https://i.ibb.co/HNHZfZR/register.jpg" alt="" />
                    </div>
                </div>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                }
                <p className="text-center mt-5">Already have an account?<Link className="ml-2 text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;