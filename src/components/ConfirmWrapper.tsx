'use client';

import { useSearchParams } from 'next/navigation';
import Confirm from './Confirm';

export default function ConfirmWrapper() {
  const searchParams = useSearchParams();
  const token = searchParams.get('user'); // or 'token' depending on your URL param key

  return <Confirm params={{ token: token ?? '' }} />;
}
