import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { Button, InputField } from '../../components/shared';
import images from '../../assets/images/images';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: false
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
        tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
        tempErrors.emailAddress = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.emailAddress)
            ? ""
            : "Email is not valid.";
        tempErrors.message = formData.message ? "" : "Message is required.";
        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="flex justify-center items-center p-6 sm:p-10 mb-24 sm:mb-[5rem]">
            <div className="flex flex-col-reverse lg:flex-row w-full sm:max-w-[95vw] lg:max-w-[90vw] shadow-lg shadow-gray-500 rounded-lg overflow-auto">
                <div className="lg:w-1/2 w-full p-4 sm:p-8">
                    <h2 className="text-xl text-purpleColor font-bold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-flow-row sm:grid-cols-2 gap-4 mb-4">
                            <InputField
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                            <InputField
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                                name="emailAddress"
                                placeholder="Email Address"
                                type="email"
                                value={formData.emailAddress}
                                onChange={handleChange}
                                error={!!errors.emailAddress}
                                helperText={errors.emailAddress}
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <TextareaAutosize
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                minRows={8}
                                maxRows={8}
                                className={`w-full p-2 outline outline-1 hover:outline-1 focus:outline-2 rounded resize-none ${errors.message ? 'outline-red-500' : 'outline-gray-300 focus:outline-blue-700 hover:outline-black'}`}
                                style={{
                                    resize: 'none',
                                }}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                            )}
                        </div>
                        <Button
                            name="Send Message"
                            variant="contained"
                            gradiant={true}
                            onClick={handleSubmit}
                        />
                    </form>
                </div>
                <div className="lg:w-1/2 w-full lg:h-auto h-80 mt-0">
                    <img
                        src={images.contactUS} // Replace with your image URL
                        alt="Contact Us"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
