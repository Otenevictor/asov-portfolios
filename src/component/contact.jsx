import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
    return (
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
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea className="w-full p-2 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
