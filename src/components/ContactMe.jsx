import React from 'react';
import { IoIosSend } from "react-icons/io";

const ContactMe = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex justify-center items-center w-full md:w-1/2'>
                {/* <img src='/assets/images/contact.jpeg' className='h-[600px] w-auto rounded'/> */}

            </div>
            <div className='w-full md:w-1/2'>
                <form
                    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl border-2 border-gray-100 space-y-6 hover:shadow-2xl transition-shadow duration-500"
                // onSubmit={handleSubmit} // Handle form submission
                >
                    <h2 className="text-3xl font-semibold text-center text-gray-800">
                        Get in Touch
                    </h2>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 placeholder-gray-400 transition-all duration-300"
                            placeholder="Enter your email address"
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Your Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 placeholder-gray-400 transition-all duration-300"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 placeholder-gray-400 resize-none transition-all duration-300"
                            rows="5"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                        >
                            <div className='flex justify-center items-center'>
                                Send Message
                                <IoIosSend />
                            </div>

                        </button>
                    </div>

                    {/* Success or Error Message (Optional) */}
                    {/* <div className="text-center mt-4">
    <p className="text-green-500">Message Sent Successfully!</p>
    <p className="text-red-500">Something went wrong. Please try again.</p>
  </div> */}
                </form>
            </div>

        </div>
    );
};

export default ContactMe;