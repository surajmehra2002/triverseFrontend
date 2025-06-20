'use client';

import { Suspense } from 'react';
import ConfirmWrapper from '@/components/ConfirmWrapper';

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center text-lg">Loading...</div>}>
      <ConfirmWrapper />
    </Suspense>
  );
}
