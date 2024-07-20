import React, { useState } from "react"
import images from "../../assets/images/images";
import { Checkbox, Divider } from "@mui/material";
import Button from "../../components/shared/Button";
import { blueColor, grayColor, purpleColor, textLightBlackColor, textPrimaryColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { Button as MuiButton } from "@mui/material";

const SignupPage = () => {
    const [signupUser, setSignupUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [visiblePassword, setVisiblePassword] = useState();
    const handelChange = (event) => {
        setSignupUser(event)
    }

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }
    return (
        <div className="flex w-full">
            <div className="w-full sm:w-[60%] h-lvh flex flex-col gap-3 justify-center items-center px-10 sm:px-0">
                <div className="w-full sm:w-[70%] lg:w-[60%]">
                    <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer">
                        <img src={images.logo} alt="" className="object-cover" />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-textPrimaryColor">Welcome to Re Decor !</h1>
                        <p className="font-normal text-sm md:text-base text-textSecondaryColor">Please enter your detail to access the interesting features of Re Decor</p>
                    </div>
                </div>
                <form className="flex flex-col gap-3 w-full sm:w-[70%] lg:w-[60%]">
                    <MuiTextField
                        name="username"
                        placeholder="username"
                        type="text"
                        value={signupUser.name}
                        onChange={handelChange}
                    />
                    <MuiTextField
                        name="email"
                        placeholder="email"
                        type="email"
                        value={signupUser.email}
                        onChange={handelChange}
                    />
                    <MuiTextField
                        name="password"
                        placeholder="password"
                        type={visiblePassword ? 'text' : 'password'}
                        value={signupUser.password}
                        onChnage={handelChange}
                    />

                    <MuiTextField
                        name="confirmPassword"
                        placeholder="confirm password"
                        type={visiblePassword ? 'text' : 'password'}
                        value={signupUser.confirmPassword}
                        onChnage={handelChange}
                    />
                    <div>
                        <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                        <label className="text-sm sm:text-base">Show Password</label>
                    </div>
                    <Button
                        name="Sign up"
                        variant="contained"
                        gradiant={true}
                        rounded="rounded-lg"
                        onChange={handelChange}
                    />
                </form>
                <div className="relative flex justify-center items-center w-full sm:w-[70%] lg:w-[60%]">
                    <MuiButton
                        variant="outlined"
                        fullWidth
                        endIcon={<img src={images.google} className="h-5 w-5" />}
                        sx={{ borderRadius: 2, height: 40, borderColor: grayColor, color: textPrimaryColor, textTransform: 'capitalize', ":hover": { borderColor: purpleColor, bgcolor: 'white' }, fontSize: { xs: 12, sm: 14, lg: 16 } }}
                    >Signup with google</MuiButton>
                </div>
            </div>
            <div className="w-[40%] h-lvh hidden sm:flex">
                <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            </div>
        </div>
    )
}

export default SignupPage;