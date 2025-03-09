"use client";

import Image from "next/image";

export default function ReturnTag() {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-96 text-center">
      <div className="bg-black text-white p-4 rounded-t-lg">
        <h1 className="text-2xl font-bold">Return</h1>
        <h2 className="text-xl">Smart Tag</h2>
        <Image src="/unboxd_white.png" alt="Unboxd Logo" width={50} height={50} className="mx-auto mt-2" />
      </div>
      <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-4 flex">
        <div className="text-left mb-4 flex-1">
          <p className="font-bold">From:</p>
          <p>123 George St.,</p>
          <p>Toronto, Ontario</p>
          <p>M53 6Z9, Canada</p>
          <p className="font-bold mt-4">To:</p>
          <p>202 Yonge,</p>
          <p>Toronto, Ontario</p>
          <p>M32 9B2, Canada</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image src="/hoodie.png" alt="Hoodie" width={200} height={200} />
        </div>
      </div>
      <Image src="/barcode.png" alt="Barcode" width={200} height={50} className="mx-auto mb-4" />
      <p className="mt-4 font-bold">Please print the tag above</p>
    </div>
  );
}
