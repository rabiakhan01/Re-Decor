import React, { useState } from "react"
import images from "../../assets/images/images";
import { Checkbox, } from "@mui/material";
import Button from "../../components/shared/Button";
import { blueColor, purpleColor } from "../../utils/styles/colors";
import MuiTextField from "../../components/shared/MuiTextField";
import { useNavigate } from "react-router-dom";
import { isUserDetailEmpty, removeError } from "../../helpers/GlobalMethods";
import { OTPInput } from "../../components/shared";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [userPassword, setUserPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [visiblePassword, setVisiblePassword] = useState();
    const [emptyData, setEmptyData] = useState({});

    // email verification states
    const [email, setEmail] = useState('');
    const [isVerifiedEmail, setIsVerifiedEmail] = useState(false);
    const [isEmptyEmail, setIsEmptyEmail] = useState(false);

    // otp verification states

    const [otp, setOtp] = useState('');
    const [isValidOtp, setIsValidOtp] = useState(false)

    //handel the onchange for the email
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserPassword({ ...userPassword, [name]: value })
        const removeEmptyData = removeError(name, userPassword, emptyData);
        setEmptyData(removeEmptyData)
    }

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const handelClick = (event) => {
        event.preventDefault();
        const validations = isUserDetailEmpty(userPassword);
        if (!validations) {
            console.log("success")
        }
        else {
            setEmptyData(validations)
        }
    }

    return (
        <React.Fragment>
            {
                isValidOtp ?
                    <div className="flex w-full h-lvh justify-center items-center">
                        <img src={images.cover_photo} alt="cover-page" className="object-cover h-full w-full" />
                        <div className="absolute min-h-[80%] w-[90%] sm:w-[80%] md:w-[27rem] flex flex-col gap-4 justify-center overflow-auto items-center px-5 sm:px-12 py-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                            <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
                                <div className="w-8 h-8 md:w-10 md:h-10 cursor-pointer">
                                    <img src={images.logo} alt="" className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-normal text-sm  text-textSecondaryColor">Change the password by entring new password</p>
                                </div>
                            </div>
                            <form className="flex flex-col gap-2 w-full">
                                <MuiTextField
                                    name="currentPassword"
                                    placeholder="Current Password"
                                    type={visiblePassword ? 'text' : 'password'}
                                    value={userPassword.currentPassword}
                                    onChange={handleInputChange}
                                    error={emptyData?.currentPassword ? true : false}
                                    helperText={emptyData?.currentPassword ? 'Current Password is required' : ''}
                                />
                                <MuiTextField
                                    name="newPassword"
                                    placeholder="New Password"
                                    type={visiblePassword ? 'text' : 'password'}
                                    value={userPassword.newPassword}
                                    onChange={handleInputChange}
                                    error={emptyData?.newPassword ? true : false}
                                    helperText={emptyData?.newPassword ? 'New Password is required' : ''}
                                />
                                <MuiTextField
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type={visiblePassword ? 'text' : 'password'}
                                    value={userPassword.confirmPassword}
                                    onChange={handleInputChange}
                                    error={emptyData?.confirmPassword ? true : false}
                                    helperText={emptyData?.confirmPassword ? 'Confirm Password is required' : ''}
                                />
                                <div className="flex justify-between w-full items-center">
                                    <div>
                                        <Checkbox size="small" sx={{ color: blueColor, '&.Mui-checked': { color: purpleColor, }, }} onClick={showPassword} />
                                        <label className="text-xs sm:text-sm ">Show Password</label>
                                    </div>
                                </div>
                                <Button
                                    name="Change Password"
                                    variant="contained"
                                    gradiant={true}
                                    rounded="rounded-lg"
                                    onClick={handelClick}
                                />
                            </form>
                        </div>

                    </div>
                    :
                    isVerifiedEmail ?
                        <div className="flex w-full h-lvh justify-center items-center">
                            <img src={images.cover_photo} alt="cover-page" className="object-cover h-full w-full" />
                            <div className="absolute min-h-[80%] w-[90%] sm:w-[80%] md:w-[27rem] flex flex-col gap-8 justify-center overflow-auto items-center px-5 sm:px-12 py-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                                <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
                                    <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
                                        <div className="flex gap-1 items-end ">
                                            <div className="flex gap-1 w-8 h-8 md:w-10 md:h-10 cursor-pointer">
                                                <img src={images.logo} alt="" className="object-cover" />
                                            </div>
                                            <p className="font-bold text-2xl text-blueColor">Re Decor</p>
                                        </div>
                                        <div>
                                            <p className="font-normal text-sm  text-textSecondaryColor">Enter the 6-digit OTP sent to your email in the boxes and then you can reset the password</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <OTPInput
                                        otp={otp}
                                        setOtp={setOtp}
                                        setIsValidOtp={setIsValidOtp}
                                    />
                                </div>
                                <Button
                                    name="Verify OTP"
                                    disabled={otp?.length === 6 ? false : true}
                                    variant="contained"
                                    gradiant={true}
                                    rounded="rounded-lg"
                                    onClick={() => {
                                        if (otp?.length === 6) {
                                            setIsValidOtp(true)
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        :
                        <div className="flex w-full h-lvh justify-center items-center">
                            <img src={images.cover_photo} alt="cover-page" className="object-cover h-full w-full" />
                            <div className="absolute min-h-[80%] w-[90%] sm:w-[80%] md:w-[27rem] flex flex-col gap-8 justify-center overflow-auto items-center px-5 sm:px-12 py-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                                <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
                                    <div className="w-full flex flex-col gap-2" onClick={() => { navigate('/') }}>
                                        <div className="flex gap-1 items-end ">
                                            <div className="flex gap-1 w-8 h-8 md:w-10 md:h-10 cursor-pointer">
                                                <img src={images.logo} alt="" className="object-cover" />
                                            </div>
                                            <p className="font-bold text-2xl text-blueColor">Re Decor</p>
                                        </div>
                                        <div>
                                            <p className="font-normal text-sm  text-textSecondaryColor">Enter the email associated with your account and we send back to you an otp code to reset your password</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <MuiTextField
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(event) => { setEmail(event.target.value); setIsEmptyEmail(false) }}
                                        error={isEmptyEmail ? true : false}
                                        helperText={isEmptyEmail ? 'Email is required' : ''}
                                    />
                                    <Button
                                        name="Verify Email"
                                        variant="contained"
                                        gradiant={true}
                                        rounded="rounded-lg"
                                        onClick={() => {
                                            if (email === null || email === '' || email === undefined) {
                                                setIsEmptyEmail(true)
                                            }
                                            else {
                                                setIsVerifiedEmail(true)
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
            }
        </React.Fragment>
    )
}

export default ForgetPassword;