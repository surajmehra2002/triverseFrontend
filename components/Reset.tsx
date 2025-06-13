// app/components/Reset.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Reset() {
  const [isVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerified) {
      console.log('Sending reset link...');
    } else {
      alert('Please verify before sending.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-[65%] bg-black relative min-h-[400px] md:min-h-screen">
        <div className="relative w-full h-full min-h-[400px] md:min-h-screen">
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
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-black">Reset Password</h2>
            <p className="text-lg text-black">
              Enter your registered email to send the password reset link
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
            />

            <Link href="/Confirm">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
