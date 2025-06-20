"use client";

import { Button } from "@/components/ui/button";

export const FloatingButton = ({ onClickAction }: { onClickAction: () => void }) => (
  <Button
    variant="default"
    size="icon"
    onClick={onClickAction}
    className="fixed bottom-6 right-6 z-[130] w-12 h-12 rounded-full bg-black text-white text-2xl hover:bg-gray-800"
    aria-label="Show More Photos"
  >
    +
  </Button>
);
