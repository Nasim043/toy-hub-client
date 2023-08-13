import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, FreeMode } from 'swiper';

const carToyReviews = [
    {
        id: 1,
        name: 'Emily Parker',
        occupation: 'Web Developer',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
        review: 'Fantastic selection! My kids adore these quality and realistic toy cars.',
    },
    {
        id: 2,
        name: 'William Turner',
        occupation: 'Marketing Specialist',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
        review: 'Excellent service. Durable and engaging toy cars for imaginative play.',
    },
    {
        id: 3,
        name: 'Olivia White',
        occupation: 'Graphic Designer',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
        review: 'Found the perfect gift for my little car enthusiast. The variety and durability of these toys are remarkable.',
    },
    {
        id: 4,
        name: 'James Martinez',
        occupation: 'Teacher',
        image: 'https://i.ibb.co/4Rvk0bS/dusk-profile-3-1.jpg',
        review: 'Prompt delivery and high-quality products. These toy cars are a great way to spark imaginative play.',
    },
    {
        id: 5,
        name: 'Sakura Tanaka',
        occupation: 'Child Psychologist',
        image: 'https://i.ibb.co/Btt1kgg/Sakura-Tanaka.jpg',
        review: 'Outstanding variety. These toy cars bring joy to kids and collectors alike.',
    },
];


const Review = () => {

    return (
        <div className='my-24'>
            <div className="flex flex-col justify-center items-center mb-7">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Testimonials</h2>
                <p className="text-gray-400 text-base sm:text-lg text-center">Toy Car Delights: Customer Stories and Reviews</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                {
                    carToyReviews?.map(({ id, name, occupation, image, review }) => (
                        <SwiperSlide key={id}>
                            <div className="mb-12 md:mb-0">
                                <div className="mb-6 flex justify-center">
                                    <img src={image} alt={name}
                                        className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                                </div>
                                <h5 className="mb-2 text-lg font-bold text-center">{name}</h5>
                                <h6 className="mb-4 font-medium text-primary dark:text-primary-400 text-center">{occupation}</h6>
                                <p className="mb-4 text-center">
                                    {review}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                        <path fill="currentColor"
                                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                    </svg>
                                </p>
                                <ul className="mb-0 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;
