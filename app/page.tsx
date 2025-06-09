'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
// import { IconBrandGoogle, IconBrandApple } from '@tabler/icons-react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:flex-1 bg-black flex flex-col relative">
        {/* Yellow Top Bar */}
       

        {/* Carousel Image */}
        <div className="flex-1 relative min-h-[250px] md:min-h-0">
          <Image
            src="/images/servic-2.jpg"
            alt="Carousel"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Note at Bottom */}
        <p className="text-white text-xs p-2 absolute bottom-0 left-0 z-10">
          *Image Carousel, changes image every 5–10 seconds*
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[35%] bg-yellow-400 flex items-center justify-center px-6 py-10">
  <div className="w-full max-w-sm space-y-6">
    <h2 className="text-center text-2xl font-semibold text-black">Account Login</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Email"
        className="w-full px-4 py-3 bg-white rounded-md text-black text-sm focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 bg-white rounded-md text-black text-sm focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex justify-start text-sm">
        <a href="/Reset" className="text-black font-medium underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>

    <p className="text-sm text-black text-center">
      Don’t have an account?{' '}
      <Link href="/Partner" className="underline font-semibold">
        Become a partner here
      </Link>
    </p>
  </div>
</div>
 </div>
  );
};

export default Login;
