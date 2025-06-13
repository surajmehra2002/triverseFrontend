"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Partner() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 bg-black relative min-h-[300px] md:min-h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/images/servic-2.jpg"
            alt="Carousel"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-white text-xs p-2 absolute bottom-0 left-0 z-10">
          *Image Carousel, changes image every 5–10 seconds*
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[35%] bg-yellow-400 flex items-center justify-center px-6 py-10 min-h-[300px] md:min-h-screen">
        <div className="w-full max-w-[400px] space-y-5">
          <h2 className="text-center text-xl font-semibold text-black">
            Become a Partner
          </h2>

          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
            />

            <textarea
              placeholder="Your Message"
              className="w-full px-3 py-2 bg-white rounded-md text-black resize-none h-20 focus:outline-none text-sm"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="verify"
                checked={isVerified}
                onChange={() => setIsVerified(!isVerified)}
                className="w-4 h-4"
              />
              <label htmlFor="verify" className="text-sm text-black">
                Verification
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign-up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
