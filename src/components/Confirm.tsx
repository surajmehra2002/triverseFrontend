'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { confirm } from '@/api/services/user_confirm/user';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
export default function Confirm() {
  const router = useRouter();
const searchParams = useSearchParams();
  const token = searchParams.get('user');

  if (!token){
    router.push('/')
  }
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password1 !== password2) {
      setError('❌ Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      const res = await confirm(password1, password2);

      if (res.status === 200) {
        setSuccess(res.data?.message || '✅ Password reset successfully');
        setPassword1('');
        setPassword2('');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setError('❌ Something went wrong');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || '❌ Failed to reset password');
      } else {
        setError('❌ An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-[65%] relative min-h-[400px] md:min-h-screen">
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
          <CardContent className="space-y-6 py-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-black">Reset Password</h2>
              <p className="text-sm text-black">Enter your new password for Email</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  placeholder="Enter New Password"
                  required
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="Confirm New Password"
                  required
                  className="bg-white"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {success && <p className="text-sm text-green-600">{success}</p>}

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
