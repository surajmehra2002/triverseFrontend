import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confirm Password Reset',
  description: 'Enter your new password',
};

export default function ConfirmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white">{children}</div>;
}
