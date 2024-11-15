import toast, { Toaster } from 'react-hot-toast';

export const showToast = (type, message) => {
    if (type === 'success') {
        toast.success(message, {
            position: 'top-center',
            duration: 3000,
        });
    } else if (type === 'error') {
        toast.error(message, {
            position: 'top-center',
            duration: 3000,
            style: { backgroundColor: '#ffffff' }
        });
    }
};

const Toast = () => {
    return (
        <div>
            <Toaster />
        </div>
    );
};

export default Toast;