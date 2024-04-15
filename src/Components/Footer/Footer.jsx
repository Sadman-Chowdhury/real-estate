import { IoMdCall } from "react-icons/io";
import { FaFax } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <>
        <footer className="p-10 bg-green-800 text-white flex flex-col gap-10 lg:flex-row justify-between pt-16 mt-40">
        <div className="flex justify-around w-full lg:w-1/2">
            <nav>
                <h6 className="footer-title underline">Contact Details</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover flex items-center gap-2"><IoMdCall className="text-[18px]"/>Mobile: 0011100456</a>
                    <a className="link link-hover flex items-center gap-2"><FaFax className="text-[18px]"/>Fax: 0011100999</a>
                    <a className="link link-hover flex items-center gap-2"><AiOutlineMail className="text-[18px]"/>Mail: dream.land@gmail.com</a>
                </div>
            </nav> 
            <nav>
                <h6 className="footer-title underline">Useful Links</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Terms and conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
            </nav>
        </div> 
        <div className="flex gap-10 items-center flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around w-full lg:w-1/2">
            <nav className="text-center md:text-left lg:text-left">
                <h6 className="footer-title underline">Pages</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">User profile</a>
                    <a className="link link-hover">Update Profile</a>
                </div>
            </nav> 
            <form className="text-center md:text-left lg:text-left">
                <h6 className="footer-title">Don't miss out!!</h6> 
                <fieldset className="form-control w-80">
                <label className="label">
                    <span className="label-text text-white">Enter your email address</span>
                </label> 
                <div className="join">
                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                    <button className="btn border border-green-600 bg-green-300 join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>
        </div>
        </footer>
            <div className="bg-green-800 text-white font-bold text-center pb-10">
                <p>Copyright © 2024 - All right reserved by Dream Land</p>
            </div>
        </>
    );
};

export default Footer;