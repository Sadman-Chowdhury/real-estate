import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import 'animate.css';

const LandDetails = () => {
    const {id} = useParams()
    const lands = useLoaderData()
    const land = lands.find(land=>land.id === parseInt(id))

    return (
        <div className="space-y-10 mt-16">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-3/5 rounded-2xl shadow-2xl">
                    <img className="w-full h-full rounded-2xl shadow-2xl bg-gray-300 p-6" src={land.image} alt="" />
                </div>
                <div className="w-full lg:w-2/5 space-y-6 animate__animated animate__fadeInRight animate__delay-1s">
                    <h1 className="text-4xl font-extrabold">{land.estate_title}</h1>
                    <hr />
                    <p className="text-gray-600">{land.description}</p>
                    <hr />
                    <div className="flex items-center">
                    <IoLocationSharp className="text-xl" />
                    <h2 className="text-xl">{land.location}</h2>
                    </div>
                    <hr />
                    <div className="text-xl space-x-4">
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{land.facilities[0]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{land.facilities[1]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{land.facilities[2]}</span>
                    </div>
                    <hr />
                    <h2 className="text-xl">Area: {land.area}</h2>
                    <hr />
                    <div className="flex items-center justify-between">
                        <button className="text-2xl border border-green-500 bg-green-500 text-white px-6 py-3 rounded-xl font-bold">{land.status}</button>
                        <h1 className="text-2xl">Price: <span className="font-extrabold border border-green-500 p-2 rounded-xl">{land.price}</span></h1>
                    </div>
                </div>
            </div>
            <div className="animate__animated animate__fadeInRight animate__delay-1s">
                <p className="text-xl font-medium">{land.detail_description}</p>
            </div>
        </div>
    );
};

export default LandDetails;