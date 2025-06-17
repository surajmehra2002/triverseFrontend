// app/timelapse/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const imageList = [
  "/images/co.jpg",
  "/images/testi2.jpg",
  "/images/whatapp.jpg",
  "/images/photo3.jpeg",
  "/images/download3.jpeg",
];

export default function TimelapsePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-4 sm:p-6 h-full relative">
      <div className="border border-gray-300 w-full h-[60vh] sm:h-[85vh] rounded relative overflow-hidden">
        <div
          onClick={handlePrev}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-base">
            &lt;
          </div>
        </div>

        <div
          onClick={handleNext}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-base">
            &gt;
          </div>
        </div>

        <div
          onClick={() => setSidebarOpen(true)}
          className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition">
            +
          </div>
        </div>

        <Image
          src={imageList[currentIndex]}
          alt={`Construction ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Side Thumbnails */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-[140] bg-black/10 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className={clsx(
              "fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg border-l transition-transform duration-300 z-[150]",
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-base font-semibold">All Images</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-64px)]">
              {imageList.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={220}
                  height={120}
                  className="rounded border cursor-pointer hover:scale-105 transition"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setSidebarOpen(false);
                  }}
                />
              ))}
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
