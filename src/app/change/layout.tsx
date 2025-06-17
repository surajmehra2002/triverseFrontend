// app/compare/layout.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconSettings,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Slider } from "@/components/ui/slider";

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sliderValue, setSliderValue] = useState([50]);

  const increment = () => {
    setSliderValue(([v]) => [Math.min(v + 5, 100)]);
  };

  const decrement = () => {
    setSliderValue(([v]) => [Math.max(v - 5, 0)]);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-black">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-yellow-400 px-3 py-2 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-lg sm:text-2xl font-bold rounded flex items-center justify-center">
              🏠
            </div>
            <Link href="/dashboard">
              <span className="font-bold text-lg sm:text-xl">TRIVERSE</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Select>
              <SelectTrigger className="bg-white w-[110px] sm:w-[120px]">
                <SelectValue placeholder="Select Cam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cam1">Cam 1</SelectItem>
                <SelectItem value="cam2">Cam 2</SelectItem>
                <SelectItem value="cam3">Cam 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-white w-[110px] sm:w-[120px]">
                <SelectValue placeholder="Select Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="timelapse">Timelapse</SelectItem>
                <SelectItem value="compare">Compare</SelectItem>
                <SelectItem value="media_upload">Media Upload</SelectItem>
                <SelectItem value="report">Report</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full bg-white hover:bg-gray-100">
                  <IconSettings size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {[
                  "Update Project Status",
                  "Update Password",
                  "Manage Users",
                  "Camera Status",
                  "Two Factor Authentication",
                  "Billing",
                  "Support",
                  "Email Notifications",
                  "Logout",
                ].map((item) => (
                  <DropdownMenuItem
                    key={item}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-[64px]">{children}</main>

        {/* Global Slider Controls */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
          <button
            onClick={decrement}
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <IconChevronLeft size={20} />
          </button>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            min={0}
            max={100}
            step={1}
            className="w-[150px] sm:w-[200px] md:w-[300px]"
          />
          <button
            onClick={increment}
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <IconChevronRight size={20} />
          </button>
        </div>

        {/* Optional Footer */}
        <footer className="bg-gray-100 text-center text-sm py-3 border-t mt-auto">
          © {new Date().getFullYear()} TRIVERSE. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
