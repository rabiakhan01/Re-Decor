import { useState } from "react";
import images from "../../../assets/images/images";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";

const Services = () => {
    const navigate = useNavigate();
    const Service = ({ image, caption, heading, desc }) => {
        const [showText, setShowText] = useState(false);
        return (
            <div className="w-full sm:w-[50%]">
                <div className="relative w-full h-[60vh] hover:cursor-pointer" onMouseEnter={() => { setShowText(true) }} onMouseLeave={() => { setShowText(false) }}>
                    <img src={image} alt="service" className="w-full h-full object-fit" />
                    {
                        <div className={`absolute z-40 ${showText ? 'flex' : 'hidden'} left-0 top-0  opacity-100 gap-2 w-full hover:bg-white hover:bg-opacity-40 h-full`}>
                            <div className="w-1 h-8 bg-blueColor  ml-4 mt-4"></div>
                            <div>
                                <p className="text-blueColor text-md font-semibold ml-2 mt-[18px]">{heading}</p>
                                <p className="text-textSecondaryColor text-sm ml-2 ">{desc}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="h-10 flex justify-center items-center bg-blueColor text-textWhiteColor">{caption}</div>
            </div>
        )
    }
    return (
        <div className="flex flex-wrap xl:flex-nowrap gap-4 xl:gap-2 px-6 w-full">
            <div className="w-full xl:w-[50%] flex flex-wrap sm:flex-nowrap gap-4  xl:gap-2">
                <div className="w-full sm:w-[50%] pr-3 mobile:pr-10 xl:pr-3 flex flex-col gap-4">
                    <div><h1 className="text-xl sm:text-2xl font-semibold">We Offer Services</h1></div>
                    <div className="text-sm text-textSecondaryColor">
                        <p>
                            At RE Decor, we offer personalized design solutions
                            for living rooms, bedrooms, bathrooms, and kitchens.
                            Choose from 13 unique styles, including modern, French,
                            Chinese, and more. Save your favorite designs, explore
                            tailored suggestions, and connect with professional designers
                            to create your perfect space.
                        </p>
                    </div>
                    <div className="w-[8rem] mobile:w-[10rem] xl:w-full">
                        <Button name={'Try For Free'} variant={'contained'} onClick={() => { navigate('/AI') }} gradiant={true} rounded={'rounded-lg'} fullWidth={true} />
                    </div>
                </div>
                <Service
                    image={images.service1}
                    caption='Decorative Spaces'
                    heading='Modern Style'
                    desc='The modern style which shows your preferences'
                />
            </div>
            <div className="w-full xl:w-[50%] flex flex-wrap sm:flex-nowrap  gap-4 xl:gap-2">
                <Service
                    image={images.service2}
                    caption='Multiple Varities'
                    heading="Best Combinations"
                    desc='The best combination of colors which gives you room an attractive look'
                />
                <Service
                    image={images.service3}
                    caption='Unique Designs'
                    heading='Asthetic Living Areas'
                    desc='The pure and asthetic look which give you vibes of purity'
                />
            </div>

        </div>
    )
}

export default Services;