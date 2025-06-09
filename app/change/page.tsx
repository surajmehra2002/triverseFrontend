"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconView360Arrow,
  IconVideo,
  IconBadgeVr,
  IconLogout,
  IconDashboard,
  IconPhoto,
} from "@tabler/icons-react";
import { ChevronLeft, Menu } from "lucide-react";

const projects = [
  { name: "Monitoring Project", image: "/images/whatapp.jpg" },
  { name: "Triverse Project", image: "/images/co.jpg" },
  { name: "Dashboard Project", image: "/images/servic-2.jpg" },
  { name: "Analytics Hub", image: "/images/whatapp.jpg" },
  { name: "VR Experience", image: "/images/co.jpg" },
  { name: "User Portal", image: "/images/servic-2.jpg" },
  { name: "Admin Panel", image: "/images/whatapp.jpg" },
  { name: "Insights Board", image: "/images/co.jpg" },
];

const ChangeViewPage = () => {
  const [view, setView] = useState<"grid" | "carousel">("grid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {showSidebar && (
        <aside className="w-64 sm:w-72 bg-white h-screen shadow-md fixed z-40 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                Tr
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-black">
                TRIVERSE
              </h1>
            </div>
            <button
              onClick={() => setShowSidebar(false)}
              className="bg-white rounded-full p-1 shadow hover:bg-gray-100 transition"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <ul className="mt-4 space-y-2 px-2 flex-1">
            <li>
              <button
                onClick={() => setView("grid")}
                className={`flex items-center space-x-3 w-full p-2 rounded text-sm ${
                  view === "grid"
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-purple-50"
                }`}
              >
                <IconDashboard size={20} />
                <span>Grid View</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-3 w-full p-2 rounded text-sm ${
                  view === "carousel"
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-purple-50"
                }`}
              >
                <IconPhoto size={20} />
                <span>Slider View</span>
              </button>
            </li>
          </ul>

          <div className="mt-auto p-2">
            <button className="flex items-center space-x-3 w-full text-left p-2 hover:bg-purple-100 rounded text-sm">
              <IconLogout size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>
      )}

      {/* Main */}
      <main
        className={`flex-1 min-h-screen transition-all duration-300 ${
          showSidebar ? "ml-64 sm:ml-72" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="h-auto bg-yellow-400 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 shadow-md">
          <div className="flex items-center justify-between w-full sm:w-auto">
            {!showSidebar && (
              <button
                onClick={() => setShowSidebar(true)}
                className="bg-gray-800 text-white rounded-full p-2 mr-2 sm:mr-4"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-xl font-bold text-black">TRIVERSE</h1>
          </div>

          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[56%] px-4 py-2 text-sm border border-white rounded-md"
          />

          <div className="flex flex-wrap items-center gap-2">
            <Link href="/dashboard">
              <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-3 sm:px-4 py-2 rounded-md text-sm">
                Change View
              </button>
            </Link>
            <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-3 sm:px-4 py-2 rounded-md text-sm">
              Map Views
            </button>
            <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-3 sm:px-4 py-2 rounded-md text-sm">
              Apply Filters
            </button>
          </div>
        </header>

        {/* Content */}
        <section className="pt-2 sm:pt-6 px-2 sm:px-6 pb-4">
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-md shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center py-2 font-semibold text-sm border-t">
                      {project.name}
                    </div>
                    <div className="bg-gray-900 py-2 flex justify-center gap-3">
                      {[IconVideo, IconView360Arrow, IconBadgeVr].map(
                        (Icon, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center shadow"
                          >
                            <Icon className="text-white w-4 h-4" stroke={2} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 col-span-full py-12 text-lg">
                  No projects found.
                </div>
              )}
            </div>
          ) : (
            <div className="relative flex justify-center items-center mt-6">
              <div className="relative w-[90%] max-w-[440px] bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white hover:bg-gray-100"
                >
                  <span className="text-xl">&larr;</span>
                </button>

                <div className="relative h-56 w-full">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center py-2 font-semibold text-sm border-t">
                  {projects[currentIndex].name}
                </div>
                <div className="bg-gray-900 py-2 flex justify-center gap-3">
                  {[IconVideo, IconView360Arrow, IconBadgeVr].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center shadow"
                    >
                      <Icon className="text-white w-4 h-4" stroke={2} />
                    </div>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white hover:bg-gray-100"
                >
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ChangeViewPage;
