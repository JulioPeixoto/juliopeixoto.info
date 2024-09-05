import React from "react";
import { SOCIAL } from "@/app/utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          {SOCIAL.map((social) => (
            <a
              key={social.brand}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-400"
              aria-label={social.brand}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <p className="mt-4">&copy; {new Date().getFullYear()} Julio Peixoto.</p>
      </div>
    </footer>
  );
};

export default Footer;
