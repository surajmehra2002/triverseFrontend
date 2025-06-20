"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { handleLogout } from "@/components/logout";
import { IconSettings } from "@tabler/icons-react";
import Link from "next/link";
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
                   <DropdownMenuTrigger asChild>
                     <Button className="p-2 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
                       <IconSettings size={24} />
                     </Button>
                   </DropdownMenuTrigger>
                     <DropdownMenuContent align="end" className="sm:w-64 w-50 overflow-y-auto">
                     {[
                       "Update Project Status",
                       "Update Password",
                       "Manage Users",
                       "Camera Status",
                       "Two Factor Authentication",
                       "Billing",
                       "Support",
                       "Email Notifications",
                     ].map((item) => (
                       <DropdownMenuItem
                         key={item}
                         className="cursor-pointer hover:bg-gray-100"
                       >
                         {item}
                       </DropdownMenuItem>
                     ))}
                   
                     {/* Logout as a separate Link item */}
                       
                                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-gray-100">
                                Logout
                     </DropdownMenuItem>
                             
                   </DropdownMenuContent>
                 </DropdownMenu>
      </header>

      {/* Main Content (no scrollbar) */}
      <main className="flex-1 pt-[60px] overflow-hidden">{children}</main>
    </div>
  );
}
