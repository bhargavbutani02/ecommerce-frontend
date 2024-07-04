import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import darklogo from "../assets/darklogo.png";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black  bg-footer text-white py-20 px-4">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
        <div className="">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8  rotate-45 mr-2">
              {" "}
              <img src={darklogo} alt="" srcset="" />
            </div>
            <h2 className="text-xl font-bold">Site Name</h2>
          </div>
          <p className="text-[15px] mb-4 text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 bg-[#17171A] p-2 rounded-full hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-300 bg-[#17171A] p-2 rounded-full hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 bg-[#17171A] p-2 rounded-full hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-gray-300 bg-[#17171A] p-2 rounded-full hover:text-white"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Returns & Warranty
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Terms and Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Corporate Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Corporate Info</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Brands
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Cookies
              </a>
            </li>
          </ul>
        </div>
        {/* Gift Card */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Gift Card</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Buy Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Redeem Card
              </a>
            </li>
          </ul>
        </div>
        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <p className="text-gray-300">United State</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
