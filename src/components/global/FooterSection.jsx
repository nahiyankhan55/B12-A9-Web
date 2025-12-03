import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import footerLogo from "/logo.png";

const FooterSection = () => {
  return (
    <div className="px-4 py-5 bg-linear-to-tl from-green-950 via-black to-gray-800 w-full">
      <div className="w-full max-w-6xl mx-auto border-b-2 border-gray-500 flex items-start gap-5 justify-between flex-wrap text-white py-5">
        <div>
          <h2 className="font-bold sm:text-2xl text-xl flex items-center gap-2">
            <img
              src={footerLogo}
              className="h-14 animate-pulse"
              alt="footer-logo"
            />
            GreenNest
          </h2>
          <p className="max-w-xs mt-2 text-gray-200">
            GreenNest is an elegant single-page web application built for plant
            lovers who want to nurture and decorate their homes with healthy
            indoor plants.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Information</h2>
          <ul className="flex flex-col items-start mt-3 text-gray-400 gap-1">
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Plant Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white duration-300 font-medium">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Social Links</h2>
          <ul className="flex flex-col items-start mt-3 text-gray-300 gap-2">
            <li>
              <a
                href="http://twitter.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaTwitter className="text-xl"></FaTwitter>GreenNest Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaFacebook className="text-xl"></FaFacebook>GreenNest Facebook
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/"
                target="_blank"
                className="hover:text-white duration-300 font-medium flex items-center gap-1"
              >
                <FaEnvelope className="text-xl"></FaEnvelope>Admin@GreenNest.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-5 text-center text-white">
        <p className="text-lg font-medium">©GreenNest - All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterSection;
