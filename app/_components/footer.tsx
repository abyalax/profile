import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-4">Portfolio</div>
          <p className="text-gray-400 mb-8">Building the future, one line of code at a time.</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="mailto:developer@email.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://wa.me/087765290292"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition-all"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 Portfolio. Made with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
