import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        
        // This is a demo. Replace with your actual EmailJS integration.
        setTimeout(() => {
            alert('Message sent successfully! Thank you for contacting me.');
            setFormData({
                user_email: '',
                subject: '',
                message: ''
            });
        }, 1000);
    };

    return (
        // পরিবর্তন ২: এখান থেকে ব্যাকগ্রাউন্ড কালার (bg-gray-900) সরিয়ে দেওয়া হয়েছে
        <section id="contact" className="py-20 text-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent mb-4">
                        Contact Me
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Ready to start your next project? Let's create something amazing together.
                        I'm always excited to discuss new opportunities!
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Left side: Contact Info */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700 hover:shadow-purple-500/10 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
                            
                            <div className="space-y-8">
                                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-white">Email</h4>
                                        <a 
                                            href="mailto:tanvirrahmanaz@gmail.com" 
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                        >
                                            tanvirrahmanaz@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-green-700/20 transition-all duration-300">
                                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaPhoneAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-white">Phone</h4>
                                        <p className="text-gray-400">+880 1537237191</p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-purple-700/20 transition-all duration-300">
                                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-white">Location</h4>
                                        <p className="text-gray-400">Mirpur, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:shadow-blue-500/10 transition-all duration-300">
                            {/* পরিবর্তন ১: এখানে Google Map এর সঠিক এমবেড লিংক যোগ করা হয়েছে */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00994948873!2d90.34924299999999!3d23.78077775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1719641243534!5m2!1sen!2sbd"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700 hover:shadow-purple-500/10 transition-all duration-300">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                                <p className="text-gray-400">Fill out the fields below and I'll get back to you as soon as possible.</p>
                            </div>

                            <form onSubmit={handleSendEmail} className="space-y-6">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        placeholder="email@example.com" 
                                        className="w-full px-4 py-4 bg-gray-900/70 border border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500"
                                        required 
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="What's this about?" 
                                        className="w-full px-4 py-4 bg-gray-900/70 border border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500"
                                        required 
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-4 py-4 bg-gray-900/70 border border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none group-hover:border-blue-500"
                                        placeholder="Tell me about your project or just say hello..."
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-2">
                            Prefer a different way to connect?
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Find me on social media or schedule a call directly
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="#" // Replace with your LinkedIn URL
                                className="px-6 py-3 bg-blue-500/10 text-blue-300 rounded-full hover:bg-blue-500/20 transition-colors duration-300 font-medium"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="#" // Replace with your Twitter/X URL
                                className="px-6 py-3 bg-gray-500/10 text-gray-300 rounded-full hover:bg-gray-500/20 transition-colors duration-300 font-medium"
                            >
                                Twitter
                            </a>
                            <a 
                                href="https://wa.me/8801537237191" // WhatsApp link added
                                target="_blank" rel="noopener noreferrer"
                                className="px-6 py-3 bg-green-500/10 text-green-300 rounded-full hover:bg-green-500/20 transition-colors duration-300 font-medium"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;