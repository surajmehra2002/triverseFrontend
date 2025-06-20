"use client";
import Image from "next/image";

export default function MainImageDisplay({
  image,
  onPrevAction,
  onNextAction,
  onOpenSidebarAction,
}: {
  image: string;
  onPrevAction: () => void;
  onNextAction: () => void;
  onOpenSidebarAction: () => void;
}) {
  return (
    <div className="border border-gray-300 w-full h-[60vh] sm:h-[85vh] rounded relative overflow-hidden">
      <div
        onClick={onPrevAction}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-base">
          &lt;
        </div>
      </div>

      <div
        onClick={onNextAction}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-base">
          &gt;
        </div>
      </div>

      <div
        onClick={onOpenSidebarAction}
        className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 cursor-pointer"
      >
        <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition">
          +
        </div>
      </div>

      <Image
        src={image}
        alt="Current"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
