"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const imageList = [
  {
    before: "/images/photo5.jpeg",
    after: "/images/co.jpg",
  },
  {
    before: "/images/photo5.jpeg",
    after: "/images/testi2.jpg",
  },
  {
    before: "/images/photo5.jpeg",
    after: "/images/whatapp.jpg",
  },
  {
    before: "/images/photo5.jpeg",
    after: "/images/photo3.jpeg",
  },
  {
    before: "/images/photo5.jpeg",
    after: "/images/download3.jpeg",
  },
];

export default function TimelapsePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sliderRef = useRef<HTMLInputElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const imgAfterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const line = lineRef.current;
    const imgAfter = imgAfterRef.current;

    if (!slider || !line || !imgAfter) return;

    const updateSlider = () => {
      const value = slider.value;
      line.style.left = `${value}%`;
      imgAfter.style.clipPath = `inset(0px 0px 0px ${value}%)`;
    };

    const resetSlider = () => {
      slider.value = "50";
      line.style.left = "50%";
      imgAfter.style.clipPath = "inset(0px 0px 0px 50%)";
    };

    slider.addEventListener("input", updateSlider);
    slider.addEventListener("dblclick", resetSlider);

    return () => {
      slider.removeEventListener("input", updateSlider);
      slider.removeEventListener("dblclick", resetSlider);
    };
  }, [currentIndex]);

  return (
 <div className="min-h-screen overflow-y-auto pb-20 p-4 sm:p-6 h-full relative">
     <div className="text-center mb-8">
  <h1 className="text-4xl font-bold tracking-tight text-gray-800">
    Compare Images
  </h1>
  
      </div>
      {/* Image Comparison */}
      <div className="mx-auto my-8 w-full max-w-5xl flex justify-center">
        <div className="relative w-full h-auto aspect-[3/2]">
          <div className="absolute w-full h-full overflow-hidden">
            <Image
              src={imageList[currentIndex].after}
              alt="After"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute w-full h-full overflow-hidden"
            ref={imgAfterRef}
          >
            <Image
              src={imageList[currentIndex].before}
              alt="Before"
              fill
              className="object-cover"
            />
          </div>
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 w-1 bg-white z-10"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            ref={sliderRef}
            className="absolute w-[calc(100%+2.25rem)] h-full -left-[1.125rem] appearance-none bg-transparent z-20 cursor-ew-resize"
          />
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-[140] bg-black/10"
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className={clsx(
              "fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg border-l z-[150] transition-transform duration-300 overflow-hidden",
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-base font-semibold">All Images</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="text-lg"
              >
                ×
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-64px)] px-4 py-3">
              <div className="space-y-3">
                {imageList.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.after}
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
            </ScrollArea>
          </aside>
        </>
      )}

      {/* Floating Button */}
      <Button
        variant="default"
        size="icon"
        onClick={() => setSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-[130] w-12 h-12 rounded-full bg-black text-white text-2xl hover:bg-gray-800"
        aria-label="Show More Photos"
      >
        +
      </Button>
    </div>
  );
}
