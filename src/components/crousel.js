import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userimage from '../assets/userimage.png';

const Carousel = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: slidesToShow,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ridekaro-server.onrender.com/api/feedback/');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const handleResize = () => {
            // Update slidesToShow based on screen width
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesToShow(1);
            } else if (width < 992) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gradient pb-9">
                    Customer Feedback's
                </h1>
                {!loading && data.length > 0 ? (
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.id} className="bg-white h-[450px] text-black rounded-xl flex flex-col items-center">
                                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                    <img src={userimage} alt="" className="h-44 w-44 rounded-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <p>{d.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Carousel;
