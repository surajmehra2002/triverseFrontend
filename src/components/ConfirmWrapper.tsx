'use client';

import { useSearchParams } from 'next/navigation';
import Confirm from './Confirm';

export default function ConfirmWrapper() {
  const searchParams = useSearchParams();
  const token = searchParams.get('user');

  return <Confirm token={token} />;
}
