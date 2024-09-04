import React, { useState } from "react"
import images from "../../assets/images/images";
import { Checkbox, } from "@mui/material";
import Button from "../../components/shared/Button";
import { blueColor, grayColor, purpleColor, textPrimaryColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isUserDetailEmpty, removeError } from "../../helpers/GlobalMethods";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    });
    const [visiblePassword, setVisiblePassword] = useState();
    const [isEmpty, setIsEmpty] = useState();

    //handel the onchange for the email
    const handelEmailChange = (event) => {
        setLoginUser(() => ({ ...loginUser, email: event.target.value }))
        let empty = { ...isEmpty };
        empty = {
            ...isEmpty,
            isEmailNotValid: false,
            email: false
        }
        setIsEmpty(empty)
    }

    const handelChange = (event) => {
        setLoginUser(() => ({
            ...loginUser,
            [event.target.name]: event.target.value
        }))
        if (isEmpty) {
            const empty = removeError(event.target.name, loginUser, isEmpty);
            setIsEmpty(empty);
        }
    }

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const handelClick = (event) => {
        event.preventDefault();
        const validations = isUserDetailEmpty(loginUser);
        if (!validations) {
            console.log("success")
        }
        else {
            setIsEmpty(validations)
        }
    }

    return (
        <div className="flex w-full h-lvh justify-center items-center">
            <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            <div className="absolute w-[90%] sm:w-[80%] md:w-[60%] xl:w-[35%] flex flex-col gap-4 justify-center items-center px-5 sm:px-12 py-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                <div className="w-full flex flex-col gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 cursor-pointer">
                        <img src={images.logo} alt="" className="object-cover" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-textPrimaryColor">Welcome to Re Decor !</h1>
                        <p className="font-normal text-sm  text-textSecondaryColor">Please enter your detail to access the interesting features of Re Decor</p>
                    </div>
                </div>
                <form className="flex flex-col gap-2 w-full">
                    <MuiTextField
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={loginUser.email}
                        onChange={handelEmailChange}
                        error={isEmpty?.email ? true : isEmpty?.isEmailNotValid ? true : false}
                        helperText={isEmpty?.email ? 'Email is required' : isEmpty?.isEmailNotValid ? 'Email is invalid' : ''}
                    />
                    <MuiTextField
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={loginUser.password}
                        onChange={handelChange}
                        error={isEmpty?.password ? true : false}
                        helperText={isEmpty?.password ? 'Password is required' : ''}
                    />

                    <div className="flex justify-between w-full items-center">
                        <div>
                            <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                            <label className="text-xs sm:text-sm ">Show Password</label>
                        </div>
                        <p className="text-purpleColor text-xs sm:text-sm font-medium cursor-pointer">Forget Password</p>

                    </div>
                    <Button
                        name="Login"
                        variant="contained"
                        gradiant={true}
                        rounded="rounded-lg"
                        onClick={handelClick}
                    />
                    <Button
                        type="button"
                        name="Create An Account"
                        variant="outlined"
                        gradiant={true}
                        rounded="rounded-lg"
                        onClick={handelClick}
                    />
                </form>
                <div className="relative flex justify-center items-center w-full">
                    <MuiButton
                        variant="outlined"
                        fullWidth
                        endIcon={<img src={images.google} className="h-5 w-5" />}
                        sx={{ borderRadius: 2, height: 43, borderColor: grayColor, color: textPrimaryColor, textTransform: 'capitalize', ":hover": { borderColor: purpleColor, bgcolor: 'transparent' }, fontSize: { xs: 12, sm: 14, lg: 16 } }}
                    >Continue with google</MuiButton>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;