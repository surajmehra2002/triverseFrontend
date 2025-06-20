'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const projects = [
  {
    id: 1,
    name: 'Triverse API',
    status: 'On-Going',
    image: '/images/servic-2.jpg',
  },
  {
    id: 2,
    name: 'HRMS Triverse',
    status: 'On-Going',
    image: '/images/photo5.jpeg',
  },
  {
    id: 3,
    name: 'API Management',
    status: 'Completed',
    image: '/images/photo4.jpeg',
  },
  {
    id: 4,
    name: 'Billing Portal',
    status: 'On-Going',
    image: '/images/photo3.jpeg',
  },
  {
    id: 5,
    name: 'Mobile App',
    status: 'On-Going',
    image: '/images/photo2.jpeg',
  },
  {
    id: 6,
    name: 'Analytics Dashboard',
    status: 'On-Going',
    image: '/images/photo1.jpeg',
  },
];

export default function DashboardPage() {


  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/');
        return;
      }

      try {
        const res = await axios.get('http://192.168.1.22:8000/v1/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // If status is 200, allow access
        if (res.status === 200) {
          setAuthorized(true);
        }
      } catch (err) {
        // Handle 403 or other error
        console.error('Not authorized:', err);
        router.push('/');
      }
    };

    checkAuth();
  }, [router]);

  if (!authorized) {
    return null; // or show loading spinner
  }

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded shadow p-4 bg-white hover:shadow-md transition text-center"
          >
            <div className="w-full h-40 relative rounded overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Project Name:</strong> {project.name}
              </p>
              <p>
                <strong>Project Status:</strong>{' '}
                <span
                  className={`font-semibold ${
                    project.status === 'Completed'
                      ? 'text-green-600'
                      : 'text-yellow-700'
                  }`}
                >
                  {project.status}
                </span>
              </p>
              <p className="font-semibold">Services In Use:</p>
              <ul className="list-none space-y-1 text-blue-600 underline">
                <li>
                  <Link href="/Timelapse">Time Lapse Monitoring</Link>
                </li>
                <li>
                  <Link href="#">360 Interior Monitoring</Link>
                </li>
                <li>
                  <Link href="#">Virtual Tour</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
