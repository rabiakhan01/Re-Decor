// AccountSettingsCard.js
import React, { useState } from 'react';
import { CustomModal, Button } from '../../shared';
import axios from '../../../redux/https';
import { endPoints } from '../../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../Toast';
import { logout } from '../../../redux/actions/userActions';

const AccountSettingsCard = () => {

    const currentUser = useSelector((state) => state?.user?.currentUser);
    console.log("🚀 ~ AccountSettingsCard ~ currentUser:", currentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isResetModalOpen, setResetModalOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false)

    const handleDeleteUser = () => {
        setDeleteLoading(true);
        axios.delete(endPoints?.deleteUser + `?accessToken=${currentUser?.accessToken}`).then((res) => {
            setDeleteLoading(false);
            setDeleteModalOpen(false)
            dispatch(logout());
            navigate('/signup')

        }).catch((error) => {
            setDeleteLoading(false)
            showToast('error', error?.response?.data?.message ? error?.response?.data?.message : 'Something wents wrong')
        })
    }
    const handleOpenResetModal = () => setResetModalOpen(true);
    const handleCloseResetModal = () => setResetModalOpen(false);

    return (
        <>
            <div className='flex flex-col w-full rounded-lg shadow-md'>
                <p className='py-4 px-4 text-xl font-medium'>Account Settings</p>
                <div className='flex flex-col border-t pt-2 pb-4'>
                    <div className='flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4 py-2 sm:justify-between'>
                        <div>
                            <h1 className='text-base font-medium text-blueColor py-1 sm:py-0 w-full bg-grayColor sm:bg-none sm:bg-opacity-0 border-1 bg-opacity-10 px-4 mb-1'>Delete Account</h1>
                            <p className='text-sm text-textGrayColor px-4'>After this action the account and the information related to this account will be deleted permanently.</p>
                        </div>
                        <div className='w-fit px-4'>
                            <Button
                                variant="contained"
                                onClick={() => { setDeleteModalOpen(true) }}
                                color={'bg-[#D22B2B]'}
                                name={'Delete Account'}
                                rounded={'rounded-md'}
                                className={'!text-textWhiteColor !py-2 !text-nowrap'}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4 py-2  sm:justify-between'>
                        <div className=''>
                            <h1 className='text-base font-medium text-blueColor w-full py-1 sm:py-0 bg-grayColor sm:bg-none sm:bg-opacity-0 border-1 bg-opacity-10 px-4 mb-1'>Reset Account</h1>
                            <p className='px-4 text-sm text-textGrayColor'>After this action the account and the information related to this account will be deleted permanently.</p>
                        </div>
                        <div className='!w-fit px-4'>
                            <Button
                                variant="contained"
                                onClick={handleOpenResetModal}
                                color={'bg-[#D22B2B]'}
                                name={'Reset Account'}
                                rounded={'rounded-md'}
                                className={'!text-textWhiteColor !py-2 !text-nowrap'}
                            />
                        </div>
                    </div>
                </div>
            </div >

            <CustomModal isOpen={isDeleteModalOpen} handleClose={() => { setDeleteModalOpen(false) }}>
                <h1 className='text-xl font-medium'>Alert</h1>
                <p className='text-base text-textGrayColor mb-2'>Are you sure you want to delete your account? This action is irreversible.</p>
                <div className='flex justify-end gap-2 w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        gradiant={true}
                        rounded={'rounded-md'}
                        className={'!px-3'}
                        name={'Cancel'}
                        onClick={() => { setDeleteModalOpen(false) }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        rounded={'rounded-md'}
                        color={'bg-[#D22B2B]'}
                        className={'!px-3 !text-textWhiteColor'}
                        name={'Yes, Delete'}
                        loading={deleteLoading}
                        onClick={handleDeleteUser}
                    />
                </div>            </CustomModal>

            <CustomModal isOpen={isResetModalOpen} handleClose={handleCloseResetModal}>
                <h1 className='text-xl font-medium'>Alert</h1>
                <p className='text-base text-textGrayColor mb-2'>Are you sure you want to reset your account settings?</p>
                <div className='flex justify-end gap-2 w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        gradiant={true}
                        rounded={'rounded-md'}
                        className={'!px-3'}
                        name={'Cancel'}
                        onClick={() => { }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        rounded={'rounded-md'}
                        color={'bg-[#D22B2B]'}
                        className={'!px-3 !text-textWhiteColor'}
                        name={'Yes, Reset'}
                        onClick={() => { }}
                    />
                </div>
            </CustomModal>
        </>
    );
};

export default AccountSettingsCard;
