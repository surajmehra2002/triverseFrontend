"use client";

import MainLayout from "@/components/MainLayout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout showSidebar={false} showFilters={false}>{children}</MainLayout>;
}
