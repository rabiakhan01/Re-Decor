import React from "react";
import Button from "../Button";

const CustomCard = ({ image, heading, desc, onClick }) => {

    return (
        <div className={`flex flex-col mb-10`}>

            <div className="relative flex flex-col w-full justify-center items-center mb-6">
                <div className={`rounded-t-xl !h-80 !w-full overflow-hidden`}>
                    <img src={image} alt="img" className="object-cover h-full w-full" />
                </div>
            </div>

            <div className={`pt-3 flex flex-col justify-between w-full`}>
                <div className="flex flex-col gap-3">
                    <p className="text-md font-bold truncate">{heading}</p>
                    <p className="text-sm text-textSecondaryColor line-clamp-3">{desc}</p>
                    <Button name={'Explore'} variant={'outlined'} onClick={onClick} gradiant={true} rounded={'rounded'} className={'!text-sm !px-0 w-[52px] !py-0 !border-t-0 !border-l-0 !border-r-0 !rounded-none'} />
                </div>
            </div>
        </div>
    )
}

export default CustomCard;