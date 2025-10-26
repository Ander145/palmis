import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-amber-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div>
          <p className="text-gray-700 text-sm md:text-base">
            &copy; 2025 Nessa Store. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>

        {/* Policies */}
        <div className="flex gap-4 text-gray-700 text-sm md:text-base">
          <a href="#" className="hover:text-pink-500 transition">
            Privacy Policy
          </a>
          <span>&bull;</span>
          <a href="#" className="hover:text-pink-500 transition">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
