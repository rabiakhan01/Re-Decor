import { useNavigate } from "react-router-dom";
import { GlobeIcon } from "../../../assets/icons";
import images from "../../../assets/images/images";
import { Button } from "../../shared";

const ContactUS = () => {
    const navigate = useNavigate();
    return (
        <div className="md:mt-20 px-4">
            <div className="relative w-full bg-blueColor">
                <div className="w-full h-[22rem]  opacity-10">
                    <img src={images.contactUS} alt="contact-us" className="w-full h-full object-fit" />
                </div>
                <div className="absolute top-10 flex items-center w-full flex-col gap-4">
                    <div className="w-1/2 flex justify-center">
                        <GlobeIcon className="w-14 h-14" color="#ffffff" />
                    </div>
                    <div className="w-full px-4 sm:w-1/2 text-center text-textWhiteColor flex flex-col gap-2">
                        <h1 className="font-semibold text-xl">Contact US</h1>
                        <p className="text-base font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            name="Contact Us"
                            variant="contained"
                            color="bg-purpleColor !text-textWhiteColor"
                            onClick={() => { navigate('/Contact-Us') }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactUS;