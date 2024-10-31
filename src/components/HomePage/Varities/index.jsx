import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { allDesignVarities } from "../../../utils/DummyData";
import CustomCard from "../../shared/CustomCard";
import { useNavigate } from "react-router-dom";
const Varities = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-8 px-6">
            <div className="flex flex-col gap-3 w-full justify-center items-center ">
                <h1 className="text-xl sm:text-2xl font-semibold text-center">Diverse Interior Design Styles for Every Taste</h1>
                <p className="w-full sm:w-[50%] text-sm text-center text-textSecondaryColor">Discover a wide range of interior design styles that cater to all preferences and aesthetics. From the sleek, minimalistic charm of modern design to the rich, cultural vibrance of Indian and African styles, AI Home Decor offers endless possibilities.</p>
            </div>
            <div className="flex w-full h-full">
                <Swiper
                    spaceBetween={1}

                    breakpoints={{
                        slidesPerView: 4,

                        320: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 6,
                        },
                        720: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        940: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1250: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }

                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className={`w-full h-auto `}
                >

                    {
                        allDesignVarities.map((design, index) => {
                            return (
                                <SwiperSlide key={index} className="">
                                    <CustomCard
                                        key={index}
                                        image={design.design_img}
                                        heading={design.heading}
                                        desc={design.desc}
                                        id={design.id}
                                        onClick={() => { navigate('/blog') }}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Varities;