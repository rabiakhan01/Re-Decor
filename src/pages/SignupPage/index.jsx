import React, { useState } from "react"
import images from "../../assets/images/images";
import { Checkbox } from "@mui/material";
import Button from "../../components/shared/Button";
import { blueColor, purpleColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { useNavigate } from "react-router-dom";
import { isUserDetailEmpty, removeError } from "../../helpers/GlobalMethods";
import axios from "../../redux/https";
import { endPoints } from "../../redux/constants";
import Toast, { showToast } from "../../components/Toast";

const SignupPage = () => {

    const navigate = useNavigate();
    const [signupUser, setSignupUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [visiblePassword, setVisiblePassword] = useState();
    const [isEmpty, setIsEmpty] = useState({});
    const [loading, setLoading] = useState(false)

    //handel the onchange for the email
    const handelEmailChange = (event) => {
        setSignupUser(() => ({ ...signupUser, email: event.target.value }))
        let empty = { ...isEmpty };
        empty = {
            ...isEmpty,
            isEmailNotValid: false,
            email: false
        }
        setIsEmpty(empty)
    }
    //handel the onchange for the other fields
    const handelChange = (event) => {
        setSignupUser(() => ({ ...signupUser, [event.target.name]: event.target.value }))
        if (isEmpty) {
            const empty = removeError(event.target.name, signupUser, isEmpty);
            setIsEmpty(empty);
        }
    }

    const handelPasswordMatching = (event) => {
        setSignupUser(() => ({ ...signupUser, [event.target.name]: event.target.value }))
        let empty = { ...isEmpty };
        if (event.target.value === signupUser.password) {
            empty = {
                ...empty,
                isPasswordNotMatched: false,
            }
        }
        else {
            empty = {
                ...empty,
                confirmPassword: false,
                isPasswordNotMatched: true,
            }
        }
        setIsEmpty(empty)
    }
    //submit the data after click
    const handleSave = (event) => {
        event.preventDefault();
        const validations = isUserDetailEmpty(signupUser);
        if (!validations) {
            const payload = {
                username: signupUser?.username,
                email: signupUser?.email,
                password: signupUser?.password
            }
            setLoading(true)
            axios.post(endPoints?.singup, payload).then((res) => {
                setLoading(false)
                navigate('/verify-email', {
                    state: {
                        from: 'signup',
                        email: signupUser?.email
                    }
                })
            }).then((err) => {
                showToast('error', err?.response?.data?.message ? err?.response?.data?.message : 'Something wents wrong')
                setLoading(false)
            })
        }
        else {
            setIsEmpty(validations)
        }
    }
    //handel show and hide password
    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    return (
        <div className="flex relative w-full h-lvh justify-center items-center">
            <img src={images.cover_photo} alt="" className="object-cover h-full w-full" />
            <div className="absolute w-[90%] max-h-[95%] sm:w-[80%] md:w-[28rem] flex flex-col overflow-auto gap-3 justify-center items-center px-5 sm:px-12 py-5 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                <div className="w-full">
                    <div className="w-8 h-8 md:w-10 md:h-10 cursor-pointer mt-20" onClick={() => { navigate('/') }}>
                        <img src={images.logo} alt="" className="object-cover" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-textPrimaryColor">Welcome to Re Decor !</h1>
                        <p className="font-normal text-sm text-textSecondaryColor">Please enter your detail to access the interesting features of Re Decor</p>
                    </div>
                </div>
                <form className="flex flex-col gap-2 w-full">
                    <MuiTextField
                        name="username"
                        placeholder="username"
                        type="text"
                        value={signupUser.username}
                        onChange={handelChange}
                        error={isEmpty?.username ? true : false}
                        helperText={isEmpty?.username ? "Username is required" : ''}
                    />
                    <MuiTextField
                        name="email"
                        placeholder="email"
                        type="email"
                        value={signupUser.email}
                        onChange={handelEmailChange}
                        error={isEmpty?.email ? true : isEmpty?.isEmailNotValid ? true : false}
                        helperText={isEmpty?.email ? "Email is required" : isEmpty?.isEmailNotValid ? 'Email is not valid' : ''}

                    />
                    <MuiTextField
                        name="password"
                        placeholder="password"
                        type={visiblePassword ? 'text' : 'password'}
                        value={signupUser.password}
                        onChange={handelChange}
                        error={isEmpty?.password ? true : false}
                        helperText={isEmpty?.password ? "Password is required" : ''}

                    />

                    <MuiTextField
                        name="confirmPassword"
                        placeholder="confirm password"
                        type={visiblePassword ? 'text' : 'password'}
                        value={signupUser.confirmPassword}
                        onChange={handelPasswordMatching}
                        error={isEmpty?.confirmPassword ? true : isEmpty?.isPasswordNotMatched ? true : false}
                        helperText={isEmpty?.confirmPassword ? "Confirm Password is required" : isEmpty?.isPasswordNotMatched ? 'Please make sure Password matched' : ''}

                    />
                    <div>
                        <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                        <label className="text-xs sm:text-sm">Show Password</label>
                    </div>
                    <Button
                        name="Sign up"
                        variant="contained"
                        gradiant={true}
                        rounded="rounded-lg"
                        loading={loading}
                        onChange={handelChange}
                        onClick={handleSave}
                    />
                    <Button
                        name="Already Have An Account"
                        variant="outlined"
                        gradiant={true}
                        rounded="rounded-lg"
                        onChange={handelChange}
                        onClick={() => { navigate('/login') }}
                    />
                </form>
            </div>
            <Toast />
        </div>
    )
}

export default SignupPage;