"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector("video");
      if (video) {
        const videoHeight = video.getBoundingClientRect().height;
        setIsScrolled(window.scrollY > videoHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-20 p-4 transition-all duration-500 ${
          isScrolled ? "bg-emerald-500" : "bg-transparent"
        }`}
      >
        <div className="max-w-full  flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Logo 1"
              width={100}
              height={50}
              className="rounded-md w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16"
            />
            <Image
              src="/nexus-logo.png"
              alt="Logo 2"
              width={100}
              height={40}
              className="rounded-md w-24 h-5 sm:w-28 sm:h-14 md:w-32 md:h-16"
            />
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="sm:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}{" "}
            {/* Icon toggle */}
          </button>

          {/* Navigation */}
          <nav className="hidden sm:flex space-x-4 text-white uppercase font-montserrat">
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
            >
              About
            </a>
            <a
              href="#schedule"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
            >
              Schedule
            </a>
            <a
              href="#register"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
            >
              Register
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`sm:hidden transition-max-height duration-500 ease-in-out ${
            isNavOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 text-white uppercase font-montserrat p-4">
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
              onClick={() => setIsNavOpen(false)}
            >
              About
            </a>
            <a
              href="#schedule"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
              onClick={() => setIsNavOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#register"
              className="hover:text-blue-300 transition duration-200 text-[16px] font-normal leading-[28px]"
              onClick={() => setIsNavOpen(false)}
            >
              Register
            </a>
          </nav>
        </div>
      </header>

      {/* Video Section */}
      <div className="relative w-full h-auto">
        <video
          width="100%"
          height="auto"
          muted
          autoPlay
          loop
          playsInline
          className="block object-cover w-full h-auto sm:h-[80vh] md:h-screen lg:h-screen filter brightness-40"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Header;
