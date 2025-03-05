import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const phone = form.current.user_phone.value.trim();
        const message = form.current.message.value.trim();
        const newErrors = {};

        // Regular expressions
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Valid email format
        const phoneRegex = /^\+?[0-9]{7,15}$/;  // Phone number: 7-15 digits, optional +

        if (!name) newErrors.user_name = "Name is required";
        if (!email) newErrors.user_email = "Email is required";
        else if (!emailRegex.test(email)) newErrors.user_email = "Invalid email format";
        if (!phone) newErrors.user_phone = "Phone number is required";
        else if (!phoneRegex.test(phone)) newErrors.user_phone = "Invalid phone number";
        if (!message) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputFocus = (field) => {
        // Remove error when user clicks into the input field
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    };


    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;


        emailjs
            .sendForm('service_yc4bksq', 'template_78lujos', form.current, {
                publicKey: 'GziHOyb2nN5FyS5NC',
            })
            .then(
                () => {
                    // Success toast notification
                    toast.success('Message sent successfully!', {
                        duration: 4000,
                        position: 'buttom-right',
                        style: {
                            background: '#4CAF50',
                            color: 'white',
                        },
                    });

                    // Reset the form
                    form.current.reset();
                },
                (error) => {
                    // Error toast notification
                    toast.error('Failed to send message. Please try again.', {
                        duration: 4000,
                        position: 'top-right',
                        style: {
                            background: '#F44336',
                            color: 'white',
                        },
                    });
                },
            );
    };

    return (
        <>
            {/* Add Toaster component to render notifications */}
            <Toaster />

            <section className="py-12 text-black bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('https://res.cloudinary.com/de5sm2jjl/image/upload/v1741035181/%D7%A2%D7%A8%D7%95%D7%A5_%D7%9B%D7%A0%D7%A1%D7%AA_GIF_by_knessettv_xnjghc.gif')` }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                        <p className="text-lg text-black mb-6">
                            Feel free to reach out for collaborations or just a chat about tech!
                        </p>
                        <div className='flex flex-col justify-center  p-2'>
                            <h3 className="text-xl font-bold mb-4">Social Media</h3>
                            <div className="flex justify-center md:flex md:justify-start md:p-0 p-2 space-x-4">
                                <a href="mailto:solomonotene@gmail.com" target="blank" rel="noopener noreferrer">
                                    <FaEnvelope className='"text-black text-2xl  hover:text-gray-300"' />
                                </a>
                                <a href="https://github.com/Otenevictor" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub className="text-black text-2xl 
                                            hover:text-gray-300" />
                                </a>
                                <a href="https://x.com/BlessedVictoo" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaTwitter className="text-black text-2xl
                                            hover:text-gray-300" />
                                </a>
                                <a href=": https://www.instagram.com/solomonotene36" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaInstagram className="text-black text-2xl
                                            hover:text-gray-300" />
                                </a>
                                <a href="https://www.linkedin.com/in/victor-otene-26a4a023a/" target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin className="text-black text-2xl
                                            hover:text-gray-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-gray-900">
                        <form ref={form} onSubmit={sendEmail} noValidate>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="user_name" className="w-full p-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded-lg" placeholder="Your Name" onFocus={() => handleInputFocus("user_name")} />
                                {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input type="email" name="user_email" className="w-full p-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded-lg" placeholder="Your Email @mail.com" onFocus={() => handleInputFocus("user_email")} />
                                {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone</label>
                                <input type="tel" name="user_phone" className="w-full p-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded-lg" placeholder="Your Phone Number" onFocus={() => handleInputFocus("user_phone")} />
                                {errors.user_phone && <p className="text-red-500 text-sm">{errors.user_phone}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Message</label>
                                <textarea name="message" className="w-full p-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded-lg" rows="4" placeholder="Your Message" onFocus={() => handleInputFocus("message")}></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <button type="submit" className="w-full bg-blue-500  hover:border-2 hover:border-blue-500  hover:bg-white hover:text-gray-800 text-white py-2 px-6 rounded-lg transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;