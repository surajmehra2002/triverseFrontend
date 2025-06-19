'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Reset() {
  const isTestMode = false;
  const [isVerified] = useState(isTestMode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isVerified) {
      alert('✅ Reset link sent successfully.');
    } else {
      alert('❌ Please verify before sending.');
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
      <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-screen flex items-center justify-center px-6 py-10 bg-yellow-400">
        <div className="absolute inset-0">
          <Image
            src="/images/sign.jpg"
            alt="Right Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Reset Card */}
        <Card className="w-full max-w-sm shadow-md z-10 relative">
          <CardContent className="space-y-6 py-6">
            <div className="text-center space-y-1">
              <h2 className="text-xl font-semibold text-black">Reset Password</h2>
              <p className="text-sm text-black">
                Enter your registered email to send the password reset link
              </p>
            </div>

            {/* ✅ Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
