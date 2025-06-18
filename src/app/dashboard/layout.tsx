"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconSettings } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 px-3 py-2 flex items-center justify-between gap-2 sm:gap-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <Image src="/images/trilogo.jpg" alt="Logo" width={32} height={32} />
          <Link href="/dashboard">
            <span className="font-bold text-lg sm:text-xl whitespace-nowrap">
              TRIVERSE
            </span>
          </Link>
        </div>

        {/* Settings Dropdown using shadcn */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <IconSettings className="w-6 h-6 text-gray-800 hover:text-black" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>
            <Link href="/">
              <DropdownMenuItem asChild>
                <span>Logout</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content (no scrollbar) */}
      <main className="flex-1 pt-[60px] overflow-hidden">{children}</main>
    </div>
  );
}
