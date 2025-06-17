// app/timelapse/layout.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconSettings,
  IconMoodSmile,
  IconPencil,
  IconVideo,
  IconStar,
  IconMask,
} from "@tabler/icons-react";
import { CalendarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TimelapseLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="flex flex-col h-screen bg-white text-black overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-200 bg-yellow-400 px-3 py-2 flex items-center justify-between gap-2 sm:gap-4 border-b border-gray-300">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 text-lg sm:w-10 sm:h-10 sm:text-2xl font-bold rounded flex items-center justify-center">
              <Image src="/images/trilogo.jpg" alt="Logo" width={32} height={32} />
          </div>
          <Link href="/dashboard">
            <span className="font-bold text-lg sm:text-xl whitespace-nowrap">TRIVERSE</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Select>
            <SelectTrigger className="bg-white w-[70px] sm:w-[120px]">
              <SelectValue placeholder="Select Cam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cam1">Cam 1</SelectItem>
              <SelectItem value="cam2">Cam 2</SelectItem>
              <SelectItem value="cam3">Cam 3</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => {
              const routes: Record<string, string> = {
                timelapse: "/Custom",
                compare: "/Compare",
                media_upload: "/MediaUpload",
                report: "/Report",
              };
              if (routes[value]) router.push(routes[value]);
            }}
          >
            <SelectTrigger className="bg-white w-[70px] sm:w-[120px]">
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timelapse">Timelapse</SelectItem>
              <SelectItem value="compare">Compare</SelectItem>
              <SelectItem value="media_upload">Media Upload</SelectItem>
              <SelectItem value="report">Report</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-9 h-9 p-0">
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
                <IconSettings size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 max-h-[50vh] overflow-y-auto">
              {[
                "Update Project Status",
                "Update Password",
                "Manage Users",
                "Camera Status",
                "Two Factor Authentication",
                "Billing",
                "Support",
                "Email Notifications",
                "Logout",
              ].map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Body: Below Fixed Header */}
      <div className="flex flex-1 pt-[70px] overflow-hidden">
        {/* Sidebar */}
        <aside className="w-14 sm:w-16 flex-shrink-0 flex flex-col items-center py-4 gap-3 border-r border-gray-200 bg-white">
          {[IconMoodSmile, IconPencil, IconVideo, IconStar, IconMask].map((Icon, idx) => (
            <div
              key={idx}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer"
            >
              <Icon size={18} />
            </div>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
