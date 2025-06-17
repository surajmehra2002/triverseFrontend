"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Partner() {
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify before signing up.");
      return;
    }
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 relative min-h-[300px] md:min-h-screen">
        <Image
          src="/images/servic-2.jpg"
          alt="Carousel"
          fill
          className="object-cover"
          priority
        />
        <p className="text-white text-xs p-2 absolute bottom-0 left-0 z-10">
          *Image Carousel, changes image every 5–10 seconds*
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-screen flex items-center justify-center px-6 py-10 bg-yellow-400">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/sign.jpg"
            alt="Right Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Card */}
        <Card className="w-full max-w-md z-10 relative shadow-md">
          <CardContent className="space-y-3 py-6">
            {/* Logo */}
            <div className="flex justify-center ">
              <Image
                src="/images/trilogo.jpg"
                alt=" Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h2 className="text-xl font-semibold text-black">Become a Partner</h2>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-white text-black"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white text-black"
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-black"
                required
              />

              <Input
                type="password"
                placeholder="Password"
                className="bg-white text-black"
                required
              />

              <Textarea
                placeholder="Your Message"
                className="bg-white text-black resize-none h-20"
              />

              <div className="flex items-center gap-2">
                <Checkbox
                  id="verify"
                  checked={isVerified}
                  onCheckedChange={(checked) => setIsVerified(!!checked)}
                />
                <Label htmlFor="verify" className="text-sm text-black">
                  Verification
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign-up
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
