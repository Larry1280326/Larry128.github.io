"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const [toastMessage, setToastMessage] = useState("");

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogClick = () => {
    setToastMessage("The blog is currently under preparation.");
    setTimeout(() => setToastMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-7 flex flex-col justify-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                "Larry128",
                1000,
                "Student",
                1000,
                "Gamer",
                1000,
                "Larry128",
                1000,
              ]}
              wrapper='span'
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className='text-white text-base sm:text-lg lg:text-2xl py-8'>
            Hi, I am Larry128. I am currently a student at HKUST.
          </p>
          <div>
            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-500 text-white'
              onClick={scrollToAbout}
            >
              About Me
            </button>

            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'
              onClick={handleBlogClick}
            >
              Blog
            </button>
          </div>
          {toastMessage && (
            <div className="mt-4 p-2 bg-gray-800 text-white rounded">
              {toastMessage}
            </div>
          )}
        </div>
        <div className='col-span-5 flex items-center justify-center mt-4 lg:mt-0'>
          <div className='rounded-full'>
            <Image
              src="/images/icon.png"
              alt='icon'
              className='rounded-full'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;