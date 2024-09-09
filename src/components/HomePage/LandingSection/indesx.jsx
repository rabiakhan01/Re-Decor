import images from "../../../assets/images/images";
import LandingPage from "../../../assets/images/LandingPage";
import Button from "../../shared/Button";

const LandingSection = () => {
    return (
        <div className="flex h-[100vh] w-full relative">
            <img src={images.landingPage} alt="landing" className="w-full h-full object-cover " />
            <div className="absolute  w-full h-full flex justify-center items-center bg-purple-300 bg-opacity-45">
                <div className="w-full sm:w-[80%] lg:w-[50%] flex flex-col justify-center items-center gap-5 text-textWhiteColor mb-20 px-4">
                    <h1 className="text-xl sm:text-2xl font-semibold text-center">Elevate Your Home with AI-Driven Interior Design</h1>
                    <div className="w-full sm:w-11/12 text-center flex flex-col gap-5">
                        <p className="text-sm sm:text-base">Transform your home effortlessly with AI-powered interior design,
                            tailored to your unique style and preferences. Explore a curated
                            selection of stunning design ideas for every room, save your favorites
                            , and download them with ease. Connect with top designers and turn your
                            vision into reality, making your dream space a seamless reality in just
                            a few clicks.
                        </p>
                        <div className="flex gap-4 w-full ">
                            <Button name={'Explore RE Decor'} variant={'contained'} gradiant={true} rounded={'rounded-lg'} fullWidth={true} />
                            <Button name={'Try For Free'} variant={'outlined'} gradiant={true} rounded={'rounded-lg'} fullWidth={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection;