import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-white text-gray-700 text-center font-thin text-sm">
      <div className="flex justify-center space-x-6 m-2">
        <a href="https://www.linkedin.com/company/piggie/about/" className="text-gray-400 hover:text-gray-500">
          <FaLinkedin size={24} />
          <span className="sr-only">LinkedIn profile for Piggie App</span>
        </a>
        <a href="https://www.instagram.com/piggie.ai/" className="text-gray-400 hover:text-gray-500">
          <FaInstagram size={24} />
          <span className="sr-only">Instagram profile for Piggie App</span>
        </a>
      </div>
      <p>&copy; 2024 Piggie. All rights reserved.</p>
    </footer>
  );
}
