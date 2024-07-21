import images from "../../../assets/images/images";
import Button from "../Button";
const Footer = () => {
    return (
        <footer className="relative flex flex-col justify-center items-center text-textWhiteColor">
            <div className="absolute -top-24 flex justify-center items-center w-full">
                <div className="relative flex flex-col mobile:flex-row justify-between overflow-hidden mobile:items-center w-[85%] px-4 py-4 mobile:py-0 h-36 rounded-2xl border border-platniumColor shadow-platniumColor bg-lightPurpleColor">
                    <img src={images.star} alt="" className="absolute -right-48 md:right-0" />
                    <div className="text-textPrimaryColor z-30">
                        <p className="text-lg mobile:text-xl md:text-2xl font-semibold">Ready to Get Started</p>
                        <p className="text-sm sm:text-lg w-full mobile:w-48 sm:w-auto">If you have any question feel free to Ask</p>
                    </div>
                    <div className="z-20 w-full mobile:w-auto">
                        <Button
                            name="Contact US"
                            variant="filled"
                            gradiant={true}
                            fullWidth={true}
                        />
                    </div>
                </div>
            </div>
            <div className='flex gap-1 h-auto items-center bg-gradient-to-r from-blueColor to-purpleColor w-full px-6 pt-20 pb-6'>
                <div className="flex flex-wrap justify-between w-full">
                    <div className="grid grid-flow-row text-sm sm:text-base gap-2 w-full xs:w-1/2 md:w-[25%] px-2">
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.home} alt="" className="w-4 h-4" />
                            <figcaption>Home</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.gallery} alt="" className="w-[18px] h-[18px]" />
                            <figcaption>About US</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.phone} alt="" className="w-4 h-4" />
                            <figcaption>Contact US</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.price} alt="" className="w-4 h-4" />
                            <figcaption>Price Plan</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.blog} alt="" className="w-4 h-4" />
                            <figcaption>Blog</figcaption>
                        </figure>
                    </div>
                    <div className="grid grid-flow-row mt-6 xs:mt-0 xs:justify-end text-sm sm:text-base md:justify-start gap-2 w-full xs:w-1/2 md:w-[33%] px-2">
                        <h1 className="text-lg sm:text-xl font-medium">Contact Detail</h1>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.email} alt="" className="w-4 h-4" />
                            <figcaption>rabiakhandev1@gmail.com</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.linkedin} alt="" className="w-4 h-4" />
                            <figcaption>rabia khan developer</figcaption>
                        </figure>
                        <figure className="flex gap-2 items-center cursor-pointer">
                            <img src={images.whatsapp} alt="" className="w-4 h-4" />
                            <figcaption>+92 123456789</figcaption>
                        </figure>
                    </div>
                    <div className="grid grid-flow-row justify-end w-full md:w-[40%] lg:w-[33%] px-2 mt-6 md:mt-0">
                        <h1 className="text-lg sm:text-xl font-medium">About US</h1>
                        <p className="text-sm sm:text-base">Discover innovative interior design solutions with Re Decor, the ultimate student-developed project transforming spaces into stunning, personalized sanctuaries.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;