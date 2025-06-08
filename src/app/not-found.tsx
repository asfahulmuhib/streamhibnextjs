"use client"; // <-- Ditambahkan

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // <-- Impor usePathname
import Link from "next/link"; // <-- Impor Link

const NotFoundPage = () => { // Nama komponen diubah (opsional)
  const pathname = usePathname(); // <-- Gunakan usePathname

  useEffect(() => {
    // Anda masih bisa log pathname jika mau
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        {/* Gunakan Link dari next/link */}
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; // Nama export disesuaikan

