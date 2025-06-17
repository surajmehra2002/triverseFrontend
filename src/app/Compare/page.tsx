"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

const imageList = [
  "/images/photo5.jpeg",
  "/images/co.jpg",
  "/images/testi2.jpg",
  "/images/whatapp.jpg",
  "/images/photo3.jpeg",
  "/images/download3.jpeg",
];

export default function TimelapsePage() {
  const [beforeImage, setBeforeImage] = useState(imageList[0]);
  const [afterImage, setAfterImage] = useState(imageList[1]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const lineRef = useRef<HTMLDivElement | null>(null);
  const imgBeforeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    const imgBefore = imgBeforeRef.current;
    if (!line || !imgBefore) return;

    line.style.left = `${sliderValue}%`;
    imgBefore.style.clipPath = `inset(0px 0px 0px ${sliderValue}%)`;
  }, [sliderValue]);

  return (
    <div className="min-h-screen overflow-y-auto pb-20 p-4 sm:p-6 h-full relative">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Compare Images
        </h1>
      </div>

      {/* Image Comparison */}
      <div className="mx-auto my-8 w-full max-w-5xl flex justify-center">
        <div className="relative w-full h-auto aspect-[3/2] rounded overflow-hidden border">
          {/* After Image (Background) */}
          <div className="absolute w-full h-full overflow-hidden">
            <Image
              src={afterImage}
              alt="After"
              fill
              className="object-cover transition-all duration-300"
            />
          </div>
          {/* Before Image (Clipped) */}
          <div
            className="absolute w-full h-full overflow-hidden"
            ref={imgBeforeRef}
          >
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover transition-all duration-300"
            />
          </div>
          {/* Divider Line */}
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 w-1 bg-white z-10"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />
          {/* Slider Control */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[60%]">
            <Slider
              value={[sliderValue]}
              min={0}
              max={100}
              step={1}
              onValueChange={(val) => setSliderValue(val[0])}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            />
          </div>
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
              <h2 className="text-base font-semibold">Select Images</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="text-lg"
              >
                ×
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-64px)] px-4 py-3 space-y-6">
              <div>
                <p className="text-sm mb-2 font-semibold text-gray-700">
                  Before Image
                </p>
                <div className="space-y-2">
                  {imageList.map((src, idx) => (
                    <Image
                      key={`before-${idx}`}
                      src={src}
                      alt={`Before ${idx + 1}`}
                      width={220}
                      height={120}
                      className="rounded border cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setBeforeImage(src);
                        setSidebarOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm mt-6 mb-2 font-semibold text-gray-700">
                  After Image
                </p>
                <div className="space-y-2">
                  {imageList.map((src, idx) => (
                    <Image
                      key={`after-${idx}`}
                      src={src}
                      alt={`After ${idx + 1}`}
                      width={220}
                      height={120}
                      className="rounded border cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setAfterImage(src);
                        setSidebarOpen(false);
                      }}
                    />
                  ))}
                </div>
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
