// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black fixed top-0 w-full z-50 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-red-600">
          Netflix
        </Link>
        <div className="space-x-6 text-white text-sm hidden sm:flex">
          <Link href="/browse">Ana Sayfa</Link>
          <Link href="#">Diziler</Link>
          <Link href="#">Filmler</Link>
          <Link href="#">Yeni ve Popüler</Link>
        </div>
      </div>
    </nav>
  );
}
