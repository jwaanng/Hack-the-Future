"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center ml-6">
        <Image src="/unboxd_white.png" alt="Unboxd Logo" width={50} height={50} />
        <span className="ml-2 text-xl font-bold">unboxd</span>
      </div>
      <div className="flex space-x-4 text-xs mr-6">
        <Link href="/" className="text-lg hover:text-blue-500">Home</Link>
        <Link href="/analytics" className="text-lg hover:text-blue-500">Analytics</Link>
        <Link href="/finance" className="text-lg hover:text-blue-500">Finance</Link>
        <Link href="/settings" className="text-lg hover:text-blue-500">Settings</Link>
        <Link href="/help" className="text-lg hover:text-blue-500">Help</Link>
      </div>
    </nav>
  );
}
