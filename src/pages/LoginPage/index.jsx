// Library Imports
import React, { useState } from "react"
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Local Imports
import images from "../../assets/images/images";
import Button from "../../components/shared/Button";
import { blueColor, purpleColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { isUserDetailEmpty, removeError } from "../../helpers/GlobalMethods";
import { loginUser } from "../../redux/actions/userActions";
import Toast, { showToast } from "../../components/Toast";
import axios from "../../redux/https";
import { endPoints } from "../../redux/constants";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginUserData, setLoginUserData] = useState({
        email: '',
        password: '',
    });
    const [visiblePassword, setVisiblePassword] = useState();
    const [isEmpty, setIsEmpty] = useState();
    const [loading, setLoading] = useState(false);

    /****************** Functions ******************/
    //handel the onchange for the email
    const handelEmailChange = (event) => {
        setLoginUserData(() => ({ ...loginUserData, email: event.target.value }))
        let empty = { ...isEmpty };
        empty = {
            ...isEmpty,
            isEmailNotValid: false,
            email: false
        }
        setIsEmpty(empty)
    }

    const handelChange = (event) => {
        setLoginUserData(() => ({
            ...loginUserData,
            [event.target.name]: event.target.value
        }))
        if (isEmpty) {
            const empty = removeError(event.target.name, loginUserData, isEmpty);
            setIsEmpty(empty);
        }
    }

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const handleLoginClick = (event) => {
        event.preventDefault();
        const validations = isUserDetailEmpty(loginUserData);
        if (!validations) {
            const payload = {
                email: loginUserData?.email,
                password: loginUserData?.password
            }
            setLoading(true)
            axios?.post(endPoints?.login, payload).then((res) => {
                console.log(res)
                const currentUser = res?.data?.data
                dispatch(loginUser(currentUser))
                setLoading(false)
                navigate('/')
            }).catch((err) => {
                setLoading(false)
                showToast('error', err?.response?.data?.message ? err?.response?.data?.message : 'Something wents wrong');
            })
        }
        else {
            setIsEmpty(validations)
        }
    }

    return (
        <div className="flex w-full h-lvh justify-center items-center">
            <img src={images.cover_photo} alt="cover-page" className="object-cover h-full w-full" />
            <div className="absolute min-h-[80%] w-[90%] sm:w-[80%] md:w-[27rem] flex flex-col gap-4 justify-center overflow-auto items-center px-5 sm:px-12 py-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
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
                        value={loginUserData.email}
                        onChange={handelEmailChange}
                        error={isEmpty?.email ? true : isEmpty?.isEmailNotValid ? true : false}
                        helperText={isEmpty?.email ? 'Email is required' : isEmpty?.isEmailNotValid ? 'Email is invalid' : ''}
                    />
                    <MuiTextField
                        name="password"
                        placeholder="Password"
                        type={visiblePassword ? 'text' : 'password'}
                        value={loginUserData.password}
                        onChange={handelChange}
                        error={isEmpty?.password ? true : false}
                        helperText={isEmpty?.password ? 'Password is required' : ''}
                    />

                    <div className="flex justify-between w-full items-center">
                        <div>
                            <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                            <label className="text-xs sm:text-sm ">Show Password</label>
                        </div>
                        <p className="text-purpleColor text-xs sm:text-sm font-medium cursor-pointer" onClick={() => { navigate('/forget-password') }}>Forget Password</p>

                    </div>
                    <Button
                        name="Login"
                        variant="contained"
                        gradiant={true}
                        rounded="rounded-lg"
                        onClick={handleLoginClick}
                        loading={loading}
                    />
                    <Button
                        type="button"
                        name="Create An Account"
                        variant="outlined"
                        gradiant={true}
                        rounded="rounded-lg"
                        onClick={() => { navigate('/signup') }}
                    />
                </form>
            </div>
            <Toast />
        </div>
    )
}

export default LoginPage;