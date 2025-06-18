// app/partner/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Join our partner program",
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white">{children}</div>;
}
