"use client";
import clsx from "clsx";
import Image from "next/image";

export default function ThumbnailSidebar({
  open,
  images,
  onCloseAction,
  onSelectAction,
}: {
  open: boolean;
  images: string[];
  onCloseAction: () => void;
  onSelectAction: (index: number) => void;
}) {
  return open ? (
    <>
      <div
        className="fixed inset-0 z-[140] bg-black/10 cursor-pointer"
        onClick={onCloseAction}
      />
      <aside
        className={clsx(
          "fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg border-l transition-transform duration-300 z-[150]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-base font-semibold">All Images</h2>
          <button
            onClick={onCloseAction}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-64px)]">
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={220}
              height={120}
              className="rounded border cursor-pointer hover:scale-105 transition"
              onClick={() => {
                onSelectAction(idx);
                onCloseAction();
              }}
            />
          ))}
        </div>
      </aside>
    </>
  ) : null;
}
