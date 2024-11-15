// SecuritySettingsCard.js
import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { CustomModal, Button, InputField } from '../../shared';
import { isUserDetailEmpty } from '../../../helpers/GlobalMethods';
import { useSelector } from 'react-redux';
import axios from '../../../redux/https';
import { endPoints } from '../../../redux/constants';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../Toast';

const SecuritySettingsCard = () => {
    const currentUser = useSelector((state) => state?.user?.currentUser);
    const naviagte = useNavigate();

    const [isEmailModalOpen, setEmailModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailEmpty, setIsEmailEmpty] = useState({})
    const [emailLoading, setEmailLoading] = useState(false)

    const handleChangeEmail = () => {
        const validations = isUserDetailEmpty({ email: email })
        if (!validations) {
            setEmailLoading(true)
            axios?.patch(endPoints?.updateEmail, { email: email, accessToken: currentUser?.accessToken }).then((res) => {
                setEmailLoading(false)
                setEmailModalOpen(false)
                showToast('success', res?.data?.data?.message ? res?.data?.data?.message : 'Email updated succcessfully')
                naviagte('/verify-email', { state: { from: 'signup', email: email } })
            }).catch((error) => {
                setEmailLoading(false)
                console.log("🚀 ~ axios?.patch ~ error:", error)
                showToast('error', error?.response?.data?.message ? error?.response?.data?.message : 'Something wents wrong')
            })
        }
        else {
            console.log('error')
        }
    }

    return (
        <>
            <div className='flex shadow-lg rounded-md flex-col'>
                <h1 className="text-xl font-medium text-blueColor p-4">Account Security</h1>
                <Divider />
                <div className='flex flex-col sm:flex-row w-full sm:justify-between sm:items-center gap-2 p-4'>
                    <h1 className='text-base font-medium text-blueColor'>Change Email</h1>
                    <div>
                        <Button
                            variant="contained"
                            onClick={() => { setEmailModalOpen(true) }}
                            name={'Change Email'}
                            gradiant={true}
                            rounded={'rounded-md'}
                            className={'w-[9rem] sm:!w-[11rem] !text-nowrap'}
                        />
                    </div>
                </div>
            </div>

            <CustomModal isOpen={isEmailModalOpen} handleClose={() => { setEmailModalOpen(false) }}>
                <p className='text-base font-medium mb-3'>Change Email</p>
                <InputField
                    name={'Email'}
                    placeholder={'Email'}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setIsEmailEmpty({}) }}
                    error={isEmailEmpty?.email ? true : isEmailEmpty?.isEmailNotValid ? true : false}
                    helperText={isEmailEmpty?.email ? 'Email is required' : isEmailEmpty?.isEmailNotValid ? 'Email is not valid' : ''}

                />
                <div className='flex justify-end gap-2 w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Cancel'}
                        className={'!px-3'}
                        onClick={() => { setEmailModalOpen(false) }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Save'}
                        loading={emailLoading}
                        onClick={handleChangeEmail}
                    />
                </div>
            </CustomModal>

        </>
    );
};

export default SecuritySettingsCard;
