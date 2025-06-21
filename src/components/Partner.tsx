"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { signup } from '@/api/services/user_signup/user';
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";
import { AxiosError } from 'axios';

export default function Partner() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPass] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmError, setConfirmError] = useState<string | null>(null); // ✅ Added for confirm password

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please verify before signing up.");
      return;
    }

    if (password !== password1) {
      setConfirmError("Passwords do not match");
      return;
    }

    const fullName = `${firstName} ${lastName}`.trim();
    setLoading(true);
    setError(null);

    try {
      const res = await signup(fullName, email, password);

      if (res && res.data && res.data.success === true) {
        router.push('/');
      } else {
        const message = res?.data?.message ?? 'SignUp failed';
        setError(message);
      }

    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.message ?? 'Something went wrong with the server.';
        setError(message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unexpected error. Please try again.');
      }

      console.error('SignUp failed:', err);
    } finally {
      setLoading(false);
    }
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
      <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-screen flex items-center justify-center px-4 py-8 bg-yellow-400">
        <div className="absolute inset-0">
          <Image
            src="/images/sign.jpg"
            alt="Right Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Card className="w-full max-w-md z-10 relative shadow-md">
          <CardContent className="space-y-3 ">
            <div className="flex justify-center">
              <Image
                src="/images/trilogo.jpg"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <h2 className="text-xl font-semibold text-black">Become a Partner</h2>
            </div>

            <form className="space-y-3" onSubmit={handleSignup}>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white text-black"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white text-black"
                  required
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black"
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                
                }}
                className="bg-white text-black"
                required
              />

              <Input
                type="password"
                placeholder="Confirm Password"
                value={password1}
                onChange={(e) => {
                  const value = e.target.value;
                  setPass(value);
              
                }}
                className="bg-white text-black"
                required
              />
              {confirmError && (
                <p className="text-sm text-red-600">{confirmError}</p>
              )}

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
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Signing up...
                  </div>
                ) : (
                  "Sign-up"
                )}
              </Button>

              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

            </form>
            <p>Already have an account? {' '}
              <Link href='/' className="underline font-semibold text-blue-700">Login In</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
