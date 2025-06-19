"use client";

import React, { useState } from "react";
import { ImageComparison } from "@/components/compare/ImageComparsion";
import { ImageSidebar } from "@/components/compare/ImageSidebar";
import { FloatingButton } from "@/components/compare/FloatingButton";

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
  const [sliderValue, setSliderValue] = useState(50);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-y-auto pb-20 p-4 sm:p-6 h-full relative">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Compare Images
        </h1>
      </div>

      <ImageComparison
        beforeImage={beforeImage}
        afterImage={afterImage}
        sliderValue={sliderValue}
        setSliderValueAction={setSliderValue}
      />

      {sidebarOpen && (
        <ImageSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
          imageList={imageList}
          setBeforeImageAction={setBeforeImage}
          setAfterImageAction={setAfterImage}
        />
      )}

      <FloatingButton onClickAction={() => setSidebarOpen(true)} />
    </div>
  );
}
