"use client";
import React, { useState } from "react";
import MainImageDisplay from "@/components/timelapse/MainImageDisplay";
import ThumbnailSidebar from "@/components/timelapse/ThumbnailSidebar";

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
      <MainImageDisplay
        image={imageList[currentIndex]}
        onPrevAction={handlePrev}
        onNextAction={handleNext}
        onOpenSidebarAction={() => setSidebarOpen(true)}
      />

      <ThumbnailSidebar
        open={sidebarOpen}
        images={imageList}
        onCloseAction={() => setSidebarOpen(false)}
        onSelectAction={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}
