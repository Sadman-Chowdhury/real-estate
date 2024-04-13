import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {useLoaderData} from "react-router-dom";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Land from '../Land/Land';
import 'animate.css';


const Home = () => {
    const lands = useLoaderData()
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="">
            <Helmet>
                <title>Home | Dream Land</title>
            </Helmet>
            <div className='swiper shadow-2xl rounded-xl mt-10 animate__animated animate__fadeInLeft animate__delay-1s'>
            <div className="swiper-button-prev text-green-600"></div>
            <div className="swiper-wrapper">
                    {lands.map((land) => (
                        <div key={land.id} className="swiper-slide bg-gray-300 p-10 space-y-5">
                            <div>
                                <img className='w-3/4 h-[300px] md:h-[400px] lg:h-[500px] rounded-xl shadow-xl mx-auto rounded-b-none' src={land.image} alt={land.estate_title} />
                            </div>
                            <div className='text-center font-bold text-2xl text-green-700 border border-green-600 w-3/4 mx-auto p-2 rounded-xl rounded-t-none shadow-xl'>
                                <h2>{land.estate_title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            <div className="swiper-button-next"></div>
            </div>
                    <h2 className='text-4xl font-bold text-green-600 text-center mt-14 mb-10'>Recent estates</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {
                        lands.map(land=><Land key={land.id} land={land}></Land>)
                    }
                    </div>
            </div>
)
};

export default Home;