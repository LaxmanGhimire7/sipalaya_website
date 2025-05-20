
import sipalayalogo from "../assets/sipalayalogo.png";
import esewa from "../images/esewa.png";
import khalti from "../images/khalti.png";
import stripe from "../images/stripe.png";
import paypal from "../images/paypal.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-800">
        {/* Logo & Description */}
        <div className="space-y-4">
          <img className="h-14" src={sipalayalogo} alt="Sipalaya Logo" />
          <p>
            At <span className="font-bold">Sipalaya</span>, We're here to help
            you thrive. Learn in-demand skills, get hired, and advance your
            career with us. Join today and start your journey to success.
          </p>
          <p>
            <span className="font-bold">WhatsApp / Phone:</span> 9851344071 |
            9806393939
          </p>
          <p>
            <span className="font-bold">Gmail:</span> infotech@sipalaya.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-10">
          <h3 className="font-bold text-purple-800 mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Registration</li>
          </ul>
        </div>

        {/* Explore Courses */}
        <div className="-ml-14">
          <h3 className="font-bold text-purple-800 mb-4">
            EXPLORE OUR COURSES
          </h3>
          <ul className="space-y-2">
            <li>Python With Data Science | 3 Months</li>
            <li>MERN Stack | 3 Months</li>
            <li>
              Full Stack Web Development in Python <br />
              With Django | 3 Months
            </li>
          </ul>
        </div>

        {/* Payment Logos */}
        <div className="">
          <h3 className="font-bold text-purple-800 mb-4">PAYMENT POWERED BY</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <img className="h-10" src={esewa} alt="Esewa" />
            <img className="h-10" src={khalti} alt="Khalti" />
            <img className="h-10" src={stripe} alt="Stripe" />
            <img className="h-10" src={paypal} alt="Paypal" />
          </div>
        </div>
      </div>

      {/* Blog and social media */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-700 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="#"
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaFacebook size={28} aria-label="Facebook" />
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={28} aria-label="Instagram" />
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={28} aria-label="LinkedIn" />
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp size={28} aria-label="WhatsApp" />
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter size={28} aria-label="Twitter" />
            </a>
          </div>

          {/* Blog Link */}
          <div className="group">
            <a
              href="#"
              className="text-white font-semibold text-lg relative pb-1
                   hover:text-blue-100 transition-colors duration-300
                   after:content-[''] after:absolute after:bottom-0 after:left-0 
                   after:w-0 after:h-[2px] after:bg-white after:transition-all 
                   after:duration-300 hover:after:w-full"
            >
              Explore Our Blog
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-white/80 text-sm">
              &copy; 2025 Sipalaya Infotech Pvt. Ltd.&reg; | All Rights Reserved
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-white/80 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </button>

              <span className="text-white/40">•</span>
              <button
                onClick={() => {
                  navigate("/TermsAndConditions");
                }}
                className="text-white/80 hover:text-white text-sm transition-colors duration-300"
              >
                Terms and Condition
              </button>
              <span className="text-white/40">•</span>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
