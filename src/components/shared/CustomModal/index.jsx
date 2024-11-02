// CustomModal.js
import React from 'react';
import { Modal, Box } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const CustomModal = ({ isOpen, handleClose, children }) => {
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={modalStyle}>
                {children}
            </Box>
        </Modal>
    );
};

export default CustomModal;
