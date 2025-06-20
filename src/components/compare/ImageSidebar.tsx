"use client";

import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface Props {
  open: boolean;
  onCloseAction: () => void;
  imageList: string[];
  setBeforeImageAction: (src: string) => void;
  setAfterImageAction: (src: string) => void;
}

export const ImageSidebar = ({
  open,
  onCloseAction,
  imageList,
  setBeforeImageAction,
  setAfterImageAction,
}: Props) => {
  return (
    <>
      <div
        className="fixed inset-0 z-[140] bg-black/10"
        onClick={onCloseAction}
      />
      <aside
        className={clsx(
          "fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg border-l z-[150] transition-transform duration-300 overflow-hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-base font-semibold">Select Images</h2>
          <Button variant="ghost" size="icon" onClick={onCloseAction} className="text-lg">
            ×
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)] px-4 py-3 space-y-6">
          <div>
            <p className="text-sm mb-2 font-semibold text-gray-700">Before Image</p>
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
                    setBeforeImageAction(src);
                    onCloseAction();
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm mt-6 mb-2 font-semibold text-gray-700">After Image</p>
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
                    setAfterImageAction(src);
                    onCloseAction();
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};
