import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t px-10 py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4 text-blue-700">Useful Links</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-blue-700">Our Services</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-blue-700">Navigation</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo image" />
            <span className="text-xl tracking-tight">HackShield</span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;