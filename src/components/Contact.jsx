import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSendEmail = (e) => {
        e.preventDefault();

        // EmailJS এর মাধ্যমে ইমেইল পাঠানোর ফাংশন
        emailjs.sendForm(
            'service_oq4y9co',      // আপনার Service ID এখানে বসান
            'template_lpst02n',     // আপনার Template ID এখানে বসান
            e.target,
            'WEwFq_dcUaOX6Pzmk'       // আপনার Public Key এখানে বসান
        )
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I will get back to you soon.',
            });
            e.target.reset(); // সফল হলে ফর্ম রিসেট করুন
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
            });
        });
    };

    return (
        <section id="contact" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                {/* সেকশনের শিরোনাম */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Contact Me</h2>
                    <p className="text-lg mt-2 text-base-content/70">Feel free to reach out to me for any queries or opportunities!</p>
                    <div className="divider w-24 mx-auto mt-2"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* বাম দিকে: যোগাযোগের তথ্য এবং ম্যাপ */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-2xl text-primary" />
                                <div>
                                    <h3 className="font-semibold text-xl">Email</h3>
                                    <a href="mailto:your-email@example.com" className="text-base-content/80 hover:text-primary">your-email@example.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-2xl text-primary" />
                                <div>
                                    <h3 className="font-semibold text-xl">Phone</h3>
                                    <p className="text-base-content/80">+880 1234 567890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-2xl text-primary" />
                                <div>
                                    <h3 className="font-semibold text-xl">Location</h3>
                                    <p className="text-base-content/80">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* গুগল ম্যাপ */}
                        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3836646845!2d90.2792378134715!3d23.78057325695246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1678886392090!5m2!1sen!2sbd"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* ডান দিকে: ইমেইল فرم */}
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSendEmail} className="bg-base-200 p-8 rounded-lg shadow-lg space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email@example.com" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Subject of your message" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered h-32" placeholder="Write your message here..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;