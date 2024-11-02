// SecuritySettingsCard.js
import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { CustomModal, Button, InputField } from '../../shared';

const SecuritySettingsCard = () => {
    const [isEmailModalOpen, setEmailModalOpen] = useState(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

    const handleOpenEmailModal = () => setEmailModalOpen(true);
    const handleCloseEmailModal = () => setEmailModalOpen(false);

    const handleOpenPasswordModal = () => setPasswordModalOpen(true);
    const handleClosePasswordModal = () => setPasswordModalOpen(false);

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
                            onClick={handleOpenEmailModal}
                            name={'Change Email'}
                            gradiant={true}
                            rounded={'rounded-md'}
                            className={'w-[9rem] sm:!w-[11rem] !text-nowrap'}
                        />
                    </div>
                </div>
                <Divider />
                <div className='flex flex-col sm:flex-row w-full sm:justify-between sm:items-center gap-2 p-4'>
                    <h1 className='text-base font-medium text-blueColor'>Change Password</h1>
                    <Button
                        variant="contained"
                        onClick={handleOpenPasswordModal}
                        name={'Change Password'}
                        gradiant={true}
                        rounded={'rounded-md'}
                        className={'w-[9rem] sm:!w-[11rem] !text-nowrap'}
                    />
                </div>
            </div>

            <CustomModal isOpen={isEmailModalOpen} handleClose={handleCloseEmailModal}>
                <p className='text-base font-medium mb-3'>Change Email</p>
                <InputField
                    name={'Email'}
                    placeholder={'Email'}
                />
                <div className='flex justify-end gap-2 w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Cancel'}
                        className={'!px-3'}
                        onClick={() => { }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Save'}
                        onClick={() => { }}
                    />
                </div>
            </CustomModal>

            <CustomModal isOpen={isPasswordModalOpen} handleClose={handleClosePasswordModal}>
                <p className='text-base font-medium mb-3'>Change Password</p>
                <InputField
                    placeholder="Current Password"
                    type="password"
                />
                <InputField
                    placeholder="New Password"
                    type="password"

                />
                <InputField
                    placeholder="Confirm Password"
                    type="password"
                    fullWidth margin="normal" required />
                <div className='flex justify-end gap-2 w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Cancel'}
                        className={'!px-3'}
                        onClick={() => { }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        gradiant={true}
                        rounded={'rounded-md'}
                        name={'Save'}
                        onClick={() => { }}
                    />
                </div>
            </CustomModal>
        </>
    );
};

export default SecuritySettingsCard;
