"use client";

import ReturnTag from "../../components/ReturnTag";

export default function GetGrading() {
  return (
    <div className="bg-[#e9fcff] flex flex-row justify-between h-screen text-center">
      <div className="flex flex-col items-center justify-center w-1/2 p-10 ml-12">
        <div className="bg-green-500 rounded-full w-32 h-32 flex items-center justify-center mb-4">
          <span className="text-6xl font-bold text-white">A</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Return Request Approved</h1>
        <p className="mb-4">
          Thank you for your return request. We are happy to inform you that the product has been approved for return and will be processed for resale.
        </p>
        <p className="mb-4 font-bold">Get return and refund updates in your inbox.</p>
        <div className="bg-black text-white p-2 rounded mb-4">
          <span className="text-lg">Order ID: X77691</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-10">
        <ReturnTag />
      </div>
    </div>
  );
}
