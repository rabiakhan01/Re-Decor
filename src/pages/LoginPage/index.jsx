import React, { useState } from "react"
import images from "../../assets/images/images";
import { Checkbox, } from "@mui/material";
import Button from "../../components/shared/Button";
import { blueColor, grayColor, purpleColor, textPrimaryColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
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

    const handelClick = (path) => {
        navigate(path)
    }
    return (
        <div className="flex w-full h-lvh justify-center items-center">
            <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            <div className="absolute w-[90%] sm:w-[80%] md:w-[60%] xl:w-[40%] flex flex-col gap-5 justify-center items-center px-5 sm:px-12 py-5 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                <div className="w-full flex flex-col gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer">
                        <img src={images.logo} alt="" className="object-cover" />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-textPrimaryColor">Welcome to Re Decor !</h1>
                        <p className="font-normal text-sm md:text-base text-textSecondaryColor">Please enter your detail to access the interesting features of Re Decor</p>
                    </div>
                </div>
                <form className="flex flex-col gap-3 w-full">
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
                        type="password"
                        value={signupUser.password}
                        onChnage={handelChange}
                    />

                    <div className="flex justify-between w-full items-center">
                        <div>
                            <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                            <label className="text-sm sm:text-base">Show Password</label>
                        </div>
                        <p className="text-purpleColor font-medium cursor-pointer">Forget Password</p>

                    </div>
                    <Button
                        name="Login"
                        variant="contained"
                        gradiant={true}
                        rounded="rounded-lg"
                        onChange={handelChange}
                        onClick={() => handelClick('/')}
                    />
                    <Button
                        name="Create An Account"
                        variant="outlined"
                        gradiant={true}
                        rounded="rounded-lg"
                        onChange={handelChange}
                        onClick={() => handelClick('/signup')}
                    />
                </form>
                <div className="relative flex justify-center items-center w-full pb-5">
                    <MuiButton
                        variant="outlined"
                        fullWidth
                        endIcon={<img src={images.google} className="h-5 w-5" />}
                        sx={{ borderRadius: 2, height: 43, borderColor: grayColor, color: textPrimaryColor, textTransform: 'capitalize', ":hover": { borderColor: purpleColor, bgcolor: 'white' }, fontSize: { xs: 12, sm: 14, lg: 16 } }}
                    >Continue with google</MuiButton>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;