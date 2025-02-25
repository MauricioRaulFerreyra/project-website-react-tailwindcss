import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="space-y-16 bg-sky-950 px-4 py-8 text-white sm:px-10 md:px-16">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Link
            to="/"
            className="mb-4 flex items-center gap-x-2 text-3xl font-semibold text-neutral-200"
          >
            <FiBookOpen size={36} />
            LearnHub
          </Link>
          <p className="text-sm">
            The best place to discover new learning resources, books, and
            courses.
          </p>
        </div>

        {/* Customer Support Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-lg font-semibold">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/faq"
                className="text-sm text-neutral-400 hover:text-white"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/returns"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                to="/shipping"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Shipping
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-sm text-neutral-400 hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="text-sm text-neutral-400 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-4 border-t border-neutral-700 pt-6 text-center text-sm">
        <p className="text-neutral-400">
          &copy; 2025 LearnHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
