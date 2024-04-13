import { IoLocationSharp } from "react-icons/io5";
import 'animate.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Land = ({land}) => {
    const {estate_title, image, description, facilities, price, area, location, id, segment_name} = land

    return (
        <div className="border p-6 rounded-2xl space-y-5 shadow-2xl" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div className="bg-gray-100 rounded-2xl flex justify-center p-4">
                    <img className="h-[250px] w-full" src={image} alt="" />
                </div>
                <div className="flex flex-col gap-5 md:flex-row lg:flex-row justify-between">
                    <div>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{facilities[0]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{facilities[1]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{facilities[2]}</span>
                    </div>
                    <div className="flex items-center">
                    <IoLocationSharp className="text-xl" />
                    <h2>{location}</h2>
                    </div>
                </div>
                <h1 className="text-2xl font-bold playfair">{estate_title}</h1>
                <p className="text-[18px] font-bold">Segment: <span className="text-green-700">{segment_name}</span></p>
                <p>{description}</p>
                <hr className="border-dashed"/>
                <div className="flex justify-between items-center">
                    <span>Price: <span className="text-red-700 font-bold text-[18px]">{price}</span></span>
                    <Link to={`/landDetails/${id}`}><button className="border border-green-500 bg-green-500 text-white p-3 rounded-xl font-bold">View Property</button></Link>
                    <div className="flex items-center gap-1">
                        <span>Area: {area}</span>
                    </div>
                </div>
            </div>
    );
};

export default Land;