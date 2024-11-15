// ProfileCard.js
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { InputField, CustomModal, Button, Spinner } from '../../shared'
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUserInfo } from '../../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { isUserDetailEmpty, removeError } from '../../../helpers/GlobalMethods';
import axios from '../../../redux/https';
import { endPoints } from '../../../redux/constants';
import Toast, { showToast } from '../../Toast';

const ProfileCard = ({ username, email }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state?.user?.currentUser)
    console.log("🚀 ~ ProfileCard ~ currentUser:", currentUser)

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [profileData, setProfileData] = useState({
        username: currentUser?.username,
        profileImage: currentUser?.profileImage
    })
    const [profilePic, setProfilePic] = useState([])
    const [emptyData, setEmptyData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileData({
            ...profileData,
            [name]: value
        })
        setEmptyData({})
    }
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
        setOpenLogoutModal(false)
    }

    const handleChangeProfile = () => {

        if (profileData?.username !== '' && profileData?.username !== undefined && profileData?.username !== null) {
            const formDataPayload = new FormData();
            formDataPayload.append('username', profileData?.username);
            formDataPayload.append('email', currentUser?.email);
            typeof (profilePic) === 'object' && formDataPayload?.append('profileImage', profilePic);
            setSaveLoading(true)
            setLoading(true)
            axios.put(endPoints?.updateProfile, formDataPayload).then((res) => {
                setSaveLoading(false);
                setLoading(false)
                dispatch(updateUserInfo({
                    ...currentUser,
                    username: res?.data?.data?.username,
                    profileImage: res?.data?.data?.profileImage
                }))
                setOpenProfileModal(false)
                showToast('success', res?.data?.message ? res?.data?.message : 'Profile updated successfully');
            }).catch((err) => {
                setLoading(false)
                setSaveLoading(false)
                showToast('error', err?.response?.data?.message ? err?.response?.data?.message : 'Something wents wrong')
            })
        }
        else {
            setEmptyData({
                username: true
            })
            console.log('error')
        }
    }

    const handleImageChange = (e) => {
        setProfilePic(e.target.files[0])
        setProfileData({
            ...profileData,
            profileImage: URL?.createObjectURL(e.target.files[0]),
        })
    }

    return (
        <React.Fragment>
            {
                loading
                    ?
                    <div className='w-full h-lvh flex items-center justify-center'>
                        <Spinner color={'#531877'} />
                    </div>
                    :
                    <React.Fragment>

                        <div className='w-full shadow-md rounded-lg px-6'>
                            <p className='h-full text-xl font-medium py-4'>Profile</p>
                            <div className='flex py-4 gap-3 sm:gap-4 flex-col sm:flex-row sm:justify-between sm:items-center w-full border-t'>
                                <div className='flex gap-4 h-full items-center'>
                                    <Avatar src={profileData?.profileImage} sx={{ width: 60, height: 60 }} />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm text-textSecondaryColor'>Username: {profileData?.username}</p>
                                        <p className='text-sm text-textSecondaryColor'>Email: {currentUser?.email}</p>
                                    </div>
                                </div>
                                <div className='flex h-full gap-2 sm:justify-center'>
                                    <Button
                                        variant="contained"
                                        gradiant={true}
                                        name={'Change Profile'}
                                        className={'!text-nowrap'}
                                        onClick={() => { setOpenProfileModal(true) }}
                                        rounded={'rounded-md'}
                                    />
                                    <Button
                                        variant="outlined"
                                        gradiant={true}
                                        name={'Logout'}
                                        className={'!text-nowrap'}
                                        onClick={() => { setOpenLogoutModal(true) }}
                                        rounded={'rounded-md'}
                                    />
                                </div>
                            </div>
                        </div>
                        <CustomModal isOpen={openProfileModal} handleClose={() => { setOpenProfileModal(false) }}>
                            <div>
                                <h1 className='pb-3 text-lg font-medium'>Change Profile</h1>
                                <div className=' max-w-min relative'>
                                    <input
                                        type='file'
                                        className='hidden'
                                        id='profile-img'
                                        accept='.jpg, .png'
                                        onChange={handleImageChange}
                                    />
                                    <label htmlFor='profile-img'>
                                        <Avatar className='cursor-pointer' src={profileData?.profileImage} sx={{ width: 60, height: 60 }} />
                                    </label>
                                    {
                                        profileData?.profileImage &&
                                        <div className='absolute top-0 right-0 w-4 flex items-center justify-center text-textWhiteColor h-4 rounded-full bg-errorColor text-center text-xl cursor-pointer' onClick={() => { setProfileData({ ...profileData, profileImage: '' }) }}><p className='mb-1'>-</p></div>
                                    }
                                </div>
                                {/* Add div fields here */}
                                <form className='flex flex-col gap-2 mt-4'>
                                    <InputField
                                        placeholder="Username"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleChange}
                                        defaultValue={username}
                                        name={'username'}
                                        value={profileData?.username ? profileData.username : ''}
                                        error={emptyData?.username ? true : false}
                                        helperText={emptyData?.username ? 'Password is required' : ''}
                                    />
                                </form>
                                {/* Add other fields like Avatar upload */}
                                <div className='flex justify-end gap-2 w-full'>
                                    <Button
                                        type="cancel"
                                        variant="outlined"
                                        gradiant={true}
                                        rounded={'rounded-md'}
                                        name={'Cancel'}
                                        className={'!px-3'}
                                        onClick={() => { setOpenProfileModal(false) }}
                                    />
                                    <Button
                                        type="save"
                                        variant="contained"
                                        gradiant={true}
                                        rounded={'rounded-md'}
                                        name={'Save'}
                                        saveLoading={saveLoading}
                                        onClick={handleChangeProfile}
                                    />
                                </div>
                            </div>
                        </CustomModal>
                        <CustomModal isOpen={openLogoutModal} handleClose={() => { setOpenLogoutModal(false) }}>
                            <h1 className='pb-2 text-lg font-medium'>Change Profile</h1>
                            <p className='text-textSecondaryColor pb-3'> Are you sure you want to logout</p>
                            <div className='flex justify-end gap-2 w-full'>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    gradiant={true}
                                    rounded={'rounded-md'}
                                    name={'Cancel'}
                                    className={'!px-3'}
                                    onClick={() => { setOpenLogoutModal(false) }}
                                />
                                <Button
                                    type="logout"
                                    variant="contained"
                                    gradiant={true}
                                    rounded={'rounded-md'}
                                    name={'Yes'}
                                    onClick={handleLogout}
                                />
                            </div>
                        </CustomModal>
                    </React.Fragment>
            }
            <Toast />
        </React.Fragment>
    );
};

export default ProfileCard;
