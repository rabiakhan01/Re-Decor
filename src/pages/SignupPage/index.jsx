import React from "react"
import images from "../../assets/images/images";

const SignupPage = () => {
    return (
        <div className="flex w-full">
            <div className="w-1/2">
                <p>hello customer</p>
            </div>
            <div className="w-1/2 h-lvh">
                <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            </div>
        </div>
    )
}

export default SignupPage;