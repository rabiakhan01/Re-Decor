import images from "../../../assets/images/images";

const Team = () => {
    return (
        <div className="relative flex flex-col gap-5 md:gap-0 h-auto md:mb-44">
            <div className="h-[22rem] md:h-[35rem] w-full relative flex justify-center">
                <img src={images.cover_photo} alt="" className="w-full h-full object-cover opacity-70 bg-purple-500" />
                <div className="absolute w-full px-6 md:w-[70%] top-20 gap-4 flex flex-col justify-center items-center text-center  text-primaryColor">
                    <h1 className="text-xl sm:text-2xl font-semibold text-center">Meet Our Passionate Team</h1>
                    <p className="text-sm w-full md:w-[60%]">
                        We are a dynamic and innovative team, passionate about AI technology
                        and design to deliver unique user experiences. Our skilled developers ensures seamless
                        functionality and stunning layout. Our marketer and business developer,
                        drives the strategic growth of our project, connecting our vision with the market
                        and ensuring our designs meet user needs.
                    </p>
                </div>
            </div>
            <div className="flex md:absolute -bottom-72 w-full flex-wrap md:flex-nowrap justify-center">
                <div className="h-full sm:h-[90vh] md:h-[30rem] xl:h-[33rem] w-full sm:w-[70vw] px-6 md:px-0 md:w-[32vw] bg-opacity-70">
                    <img src={images.rabia} alt="rabia" className="w-full h-full object-scale-down sm:object-cover" />
                </div>
                <div className="h-full sm:h-[90vh] md:h-[30rem] xl:h-[33rem] w-full sm:w-[70vw] px-6 md:px-0 md:w-[32vw]">
                    <img src={images.zahra} alt="zahra" className="w-full h-full object-scale-down sm:object-cover" />
                </div>
                <div className="h-full sm:h-[90vh] md:h-[30rem] xl:h-[33rem] w-full sm:w-[70vw] px-6 md:px-0 md:w-[32vw]">
                    <img src={images.rafay} alt="rafay" className="w-full h-full object-scale-down sm:object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Team;