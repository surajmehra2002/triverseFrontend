"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconSettings,
  IconMoodSmile,
  IconPencil,
  IconVideo,
  IconStar,
  IconMask,
  IconX
} from "@tabler/icons-react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { handleLogout } from "@/components/logout";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showFilters?: boolean;
}

export default function MainLayout({
  children,
  showSidebar = true,
  showFilters = true
}: MainLayoutProps) {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showSettingsSidebar, setShowSettingsSidebar] = useState(false);
  const [activeSetting, setActiveSetting] = useState<string | null>(null);

  const settingsItems = [
    "Update Project Status",
    "Update Password",
    "Manage Users",
    "Camera Status",
    "Two Factor Authentication",
    "Billing",
    "Support",
    "Email Notifications"
  ];

  const sidebarIcons = [
    IconMoodSmile,
    IconPencil,
    IconVideo,
    IconStar,
    IconMask
  ];

  const handleSettingClick = (item: string) => {
    setActiveSetting(item === activeSetting ? null : item);
  };

  return (
    <div className="flex h-screen bg-white text-black overflow-hidden relative">
      {/* Main Sidebar */}
      {showSidebar && (
        <aside className="w-16 flex-shrink-0 flex flex-col items-center py-4 gap-3 border-r border-gray-200 bg-white z-10">
          {sidebarIcons.map((Icon, idx) => (
            <div
              key={idx}
              className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer"
            >
              <Icon size={20} />
            </div>
          ))}
        </aside>
      )}

      {/* Background overlay with blur when settings sidebar is open */}
      {showSettingsSidebar && (
        <div 
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-20"
          onClick={() => setShowSettingsSidebar(false)}
        />
      )}

      {/* Main Panel */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-yellow-400 px-3 py-2 flex items-center justify-between gap-4 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <Image
              src="/images/trilogo.jpg"
              alt="Logo"
              width={32}
              height={32}
            />
            <Link href="/dashboard">
              <span className="font-bold text-xl whitespace-nowrap">
                TRIVERSE
              </span>
            </Link>
          </div>

          {showFilters && (
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="bg-white w-[120px]">
                  <SelectValue placeholder="Cam 1" />
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
                    report: "/Report"
                  };
                  if (routes[value]) router.push(routes[value]);
                }}
              >
                <SelectTrigger className="bg-white w-[120px]">
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
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Settings Button */}
          <Button 
            onClick={() => setShowSettingsSidebar(!showSettingsSidebar)}
            className="p-2 rounded-full bg-black hover:bg-gray-800 cursor-pointer"
          >
            <IconSettings size={24} className="text-white" />
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}

          {/* Settings Sidebar */}
          <div className={`fixed inset-y-0 right-0 w-80 bg-white h-full flex flex-col transform transition-transform duration-300 ease-in-out z-30 ${showSettingsSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold">Settings</h2>
              <button 
                onClick={() => setShowSettingsSidebar(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <IconX size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <ul className="py-2">
                {settingsItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleSettingClick(item)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${activeSetting === item ? 'bg-gray-100 font-medium' : ''}`}
                    >
                      {item}
                    </button>
                    {activeSetting === item && (
                      <div className="px-4 py-3 bg-gray-50 border-t border-b border-gray-200">
                        {item === "Update Password" && (
                          <div className="space-y-4">
                            <h3 className="font-bold mb-2">Update Password</h3>
                            <div className="space-y-2">
                              <input 
                                type="password" 
                                placeholder="Enter Old Password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                              <input 
                                type="password" 
                                placeholder="Enter New Password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                              <input 
                                type="password" 
                                placeholder="Confirm New Password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                                Cancel
                              </button>
                              <button className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500">
                                Save
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}