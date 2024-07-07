import React, { useState } from "react"
import images from "../../assets/images/images";
import InputField from "../../components/shared/InputField";

const SignupPage = () => {
    const [signupUser, setSignupUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [visiblePassword, setVisiblePassword] = useState();
    const handelChange = () => {

    }

    const showPassword = () => {

    }
    return (
        <div className="flex w-full">
            <div className="w-1/2 h-lvh flex flex-col gap-5 justify-center pl-10">
                <div className="w-12 h-12">
                    <img src={images.logo} alt="" className="object-cover" />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-textPrimaryColor">Welcome to Re Decor !</h1>
                    <p className="font-medium">Please enter the your detail to access the interesting features of Re Decor</p>
                </div>
                <form className="w-[75%] flex flex-col gap-4">
                    <InputField
                        name="username"
                        placeholder="username"
                        type="text"
                    />
                    <InputField
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <InputField
                        name="password"
                        placeholder="password"
                        type="password"
                    />

                    <InputField
                        name="confirmPassword"
                        placeholder="confirm password"
                        type="password"
                    />

                </form>
                <div>
                    with google and already have account
                </div>
            </div>
            <div className="w-1/2 h-lvh">
                <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            </div>
        </div>
    )
}

export default SignupPage;