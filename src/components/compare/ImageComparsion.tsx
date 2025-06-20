"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";

interface Props {
  beforeImage: string;
  afterImage: string;
  sliderValue: number;
  setSliderValueAction: (val: number) => void;
}

export const ImageComparison = ({
  beforeImage,
  afterImage,
  sliderValue,
  setSliderValueAction,
}: Props) => {
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
    <div className="mx-auto my-8 w-full max-w-5xl flex justify-center">
      <div className="relative w-full h-auto aspect-[3/2] rounded overflow-hidden border">
        {/* After Image */}
        <div className="absolute w-full h-full overflow-hidden">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover transition-all duration-300"
          />
        </div>
        {/* Before Image */}
        <div ref={imgBeforeRef} className="absolute w-full h-full overflow-hidden">
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
        {/* Slider */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[60%]">
          <Slider
            value={[sliderValue]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => setSliderValueAction(val[0])}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          />
        </div>
      </div>
    </div>
  );
};
