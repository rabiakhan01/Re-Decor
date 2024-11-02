// ProfileCard.js
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { InputField, CustomModal, Button } from '../../shared'

const ProfileCard = ({ avatar, username, email, onProfileUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <React.Fragment>
            <div className='w-full shadow-md rounded-lg px-6'>
                <p className='h-full text-xl font-medium py-4'>Profile</p>
                <div className='flex py-4 gap-3 sm:gap-4 flex-col sm:flex-row sm:justify-between sm:items-center w-full border-t'>
                    <div className='flex gap-4 h-full items-center'>
                        <Avatar src={avatar} sx={{ width: 60, height: 60 }} />
                        <div className='flex flex-col gap-1'>
                            <p className=''>Username: Rabia Khan{username}</p>
                            <p>Email: rabiakhandev1@gmail.com{email}</p>
                        </div>
                    </div>
                    <div className='flex h-full sm:justify-center'>
                        <Button
                            variant="contained"
                            gradiant={true}
                            name={'Change Profile'}
                            onClick={handleOpenModal}
                            rounded={'rounded-md'}
                        />
                    </div>
                </div>
            </div>

            <CustomModal isOpen={isModalOpen} handleClose={handleCloseModal}>
                <form onSubmit={onProfileUpdate}>
                    <h1 className='pb-3 text-lg font-medium'>Change Profile</h1>
                    {/* Add form fields here */}
                    <InputField placeholder="Username" fullWidth margin="normal" required defaultValue={username} />
                    <InputField placeholder="Email" fullWidth margin="normal" required defaultValue={email} />
                    {/* Add other fields like Avatar upload */}
                    <div className='flex justify-end gap-2 w-full'>
                        <Button
                            type="submit"
                            variant="outlined"
                            gradiant={true}
                            rounded={'rounded-md'}
                            name={'Cancel'}
                            className={'!px-3'}
                            onClick={() => { setIsModalOpen(false) }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            gradiant={true}
                            rounded={'rounded-md'}
                            name={'Save'}
                            onClick={() => { setIsModalOpen(false) }}
                        />
                    </div>
                </form>
            </CustomModal>
        </React.Fragment>
    );
};

export default ProfileCard;
