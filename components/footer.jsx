import React from "react";
import Link from "next/link";
import facebook from "/public/facebook.svg";
import instagram from "/public/instagram.svg";
import linkedin from "/public/linkedin.svg";
import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";
import pinterest from "/public/pinterest.svg";
import rightArrow from "/public/arrow-right-circle.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white pt-4 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
          {/* Left Section - Description and Social Media */}
          <div className="flex flex-col items-center justify-center text-center md:text-left">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.webp"
                  width="150"
                  height="60"
                  alt="Schedulrr Logo"
                  className="h-6 w-auto"
                  priority
                />
                <span className="text-sm font-bold text-[#686868]">
                  Scheduler
                </span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Infyni Scheduler connects teachers and students seamlessly.
                Create class schedules, set your teaching hours, and let
                students book live sessions with you without the hassle.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={linkedin}
                    alt="Linkedin"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={twitter}
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={youtube}
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src={pinterest}
                    alt="Pinterest"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="flex justify-center">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-red-500 flex items-center gap-3 group"
                >
                  <Image
                    src={rightArrow}
                    alt="Right Arrow"
                    width={16}
                    height={16}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                  <span>Infyni</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-red-500 flex items-center gap-3 group"
                >
                  <Image
                    src={rightArrow}
                    alt="Right Arrow"
                    width={16}
                    height={16}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                  <span>Infyni for Business</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-red-500 flex items-center gap-3 group"
                >
                  <Image
                    src={rightArrow}
                    alt="Right Arrow"
                    width={16}
                    height={16}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                  <span>Infyni for Homework</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-4 pt-8 text-center text-gray-500 text-sm mx-auto">
          © 2018-{new Date().getFullYear()}, Infyni & all affiliates - All
          rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
