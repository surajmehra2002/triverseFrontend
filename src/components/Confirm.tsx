'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Confirm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
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

      {/* Right Side with background image */}
      <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-screen flex items-center justify-center px-6 py-10 bg-yellow-400">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sign.jpg"
            alt="Right Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay form */}
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
                  placeholder="Confirm New Password"
                  required
                  className="bg-white"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
