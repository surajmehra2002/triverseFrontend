"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconView360Arrow,
  IconBadgeVr,
  IconLogout,
  IconVideo,
  IconUsers,
  IconUserPlus,
  IconSettings,
  IconCalendar,
  IconBook,
  IconCheckupList,
} from "@tabler/icons-react";
import { ChevronLeft, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/whatapp.jpg", "/images/co.jpg", "/images/servic-2.jpg"];

const menuItems = [
  { label: "Project Name 1", icon: <IconUsers size={18} /> },
  { label: "Project Name 2", icon: <IconUserPlus size={18} /> },
  { label: "Project Name 3", icon: <IconCalendar size={18} />, active: true },
  { label: "Project Name 4", icon: <IconSettings size={18} /> },
  { label: "Project Name 5", icon: <IconBook size={18} /> },
  { label: "Project Name 6", icon: <IconCheckupList size={18} /> },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;

const DashboardPage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSlider, ] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const filteredProjects = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {showSidebar && (
        <div className="fixed md:relative top-0 left-0 h-screen w-64 bg-white z-40 shadow transition-all">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-blue-600">Triverse</h1>
            <button
              onClick={() => setShowSidebar(false)}
              className="bg-white border rounded-full p-1 shadow"
            >
              <ChevronLeft size={18} />
            </button>
            
          </div>

          <div className="uppercase text-xs text-gray-400 px-4 mb-2">Platform</div>

          <nav className="space-y-1 text-sm font-medium px-2">
            {menuItems.map(({ label, icon, active }) => (
              <Link
                href="#"
                key={label}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  active
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="w-5 h-5 flex justify-center items-center text-gray-500">
                  {icon}
                </span>
                <span>{label}</span>
                <span className="ml-auto text-gray-400 text-xs">›</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-4 py-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-800 hover:text-black text-sm"
            >
              <IconLogout className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      )}

      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <header className="bg-yellow-400 px-4 py-3 flex flex-wrap gap-4 items-center justify-between shadow-md relative">
          <div className="flex items-center justify-between w-full md:w-auto">
            {!showSidebar && (
              <button
                onClick={() => setShowSidebar(true)}
                className="bg-gray-800 text-white rounded-full p-2 mr-4"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-xl font-bold text-black">TRIVERSE</h1>
          </div>

          <input
            type="text"
            placeholder="Search Projects"
            className="flex-1 min-w-[200px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          />

          <div className="flex flex-wrap items-center gap-2 relative mt-2 md:mt-0">
            {showDropdown && (
              <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <input
                  type="text"
                  placeholder="Search Projects"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 text-sm  border-white "
                />
                <ul className="max-h-60 overflow-y-auto">
                  {filteredProjects.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 text-sm hover:bg-white cursor-pointer"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link href="/change">
              <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-4 py-2 rounded-md text-sm">
                Change View
              </button>
            </Link>
            <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-4 py-2 rounded-md text-sm">
              Map View
            </button>
            <button className="bg-yellow-300 text-black hover:bg-yellow-500 px-4 py-2 rounded-md text-sm">
              Apply Filters
            </button>
          </div>
        </header>

        {showSlider && (
          <main className="flex-1 bg-gray-100 relative w-full flex flex-col p-2 overflow-x-hidden">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md shadow-lg bg-gray-100">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute top-0 left-0 w-full h-full cursor-grab select-none"
                >
                  <Image
                    src={images[imageIndex]}
                    alt={`Project ${imageIndex + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    draggable={false}
                  />
                  <div className="absolute top-0 w-full bg-black/60 py-3 text-center">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                      {menuItems[imageIndex]?.label || "PROJECT NAME"}
                    </h2>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1.5 rounded hover:bg-gray-800 z-10"
              >
                &laquo;
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1.5 rounded hover:bg-gray-800 z-10"
              >
                &raquo;
              </button>

              <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage([idx, idx > imageIndex ? 1 : -1])}
                    className={`w-3 h-3 rounded-full border transition-all duration-200 ${
                      idx === imageIndex
                        ? "bg-white border-white"
                        : "bg-gray-400 border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-800 py-4 flex justify-center gap-6 flex-wrap">
              {[IconVideo, IconView360Arrow, IconBadgeVr].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center shadow-md"
                >
                  <Icon stroke={2} className="text-white w-6 h-6" />
                </div>
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
