'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Confirm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
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
        <div className="w-full max-w-md space-y-5">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-black">Reset Password</h2>
            <p className="text-lg text-black">Enter your new password for Email</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
              required
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-3 py-2 bg-white rounded-md text-black focus:outline-none text-sm"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
