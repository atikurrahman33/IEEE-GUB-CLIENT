import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Extra = () => {
    return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section 1: Logo and About */}
            <div>
                <div className="flex gap-2 items-center mb-4">
                    <img
                        className="w-16 h-16 object-contain"
                        src="/src/Images/455678157_529474076094574_740944826832800865_n__1_-removebg-preview.png"
                        alt="IEEE Logo"
                    />
                    <p className="text-xl font-bold">IEEE Student Branch GUB</p>
                </div>
                <p className="text-sm text-gray-500">
                    A dynamic and student-driven non-profit and non-political organization operating in collaboration with the Department of Computer Science and Engineering (CSE) at Green University of Bangladesh.
                </p>
            </div>

            {/* Section 2: Quick Links */}
           <div className="pt-4 pl-8">
  <p className="text-xl font-bold pt-4 md:pt-0">Quick Links</p>
  <ol className="space-y-2 list-disc list-inside text-sm text-gray-500 pt-8">
    <li>
      <a
        href="https://green.edu.bd/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 transition-colors duration-200"
      >
        Main Website
      </a>
    </li>
    <li>
      <a
        href="https://www.ieee.org/membership/join/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 transition-colors duration-200"
      >
        Join IEEE 
      </a>
    </li>
  </ol>
</div>


            {/* Section 3: Contact */}
            <div className="pt-4">
                <p className="text-xl font-bold mb-4 pt-4 md:pt-0">Contact Us</p>
                <p className="text-sm text-gray-500">
                    Green University of Bangladesh, Purbachal American City, Kanchan, Rupganj, Narayanganj-1461, Dhaka, Bangladesh
                    <br />
                    <br />
                    Email: <a href="mailto:gucc@green.edu.bd" className="text-blue-700">ieee@green.edu.bd</a>
                </p>
                <div className="flex gap-5 pt-2 text-xl">
  <a
    href="https://www.facebook.com/ieeesbgub"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-sky-500 transition-colors duration-200"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-sky-500 transition-colors duration-200"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://mail.google.com/mail/u/0/#inbox"
    className="hover:text-sky-500 transition-colors duration-200"
  >
    <IoMail />
  </a>
</div>
               
            </div>
        </div>
    );
};

export default Extra;
