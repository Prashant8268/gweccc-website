// _components/Footer.js
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-between px-4">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">GWECCC 2025</p>
          <p>123 Climate Ave, Sustainability City, SC 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
