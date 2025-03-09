"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReasonSelect({ onConfirm }: { onConfirm: () => void }) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const router = useRouter();

  const reasons = [
    "Defective or broken",
    "Fit & Sizing issue",
    "Poor quality/materials",
    "Change of mind",
    "Delivery issues (e.g. late delivery)",
    "Other",
  ];

  const handleConfirm = () => {
    onConfirm();
    router.push("/returns/videoUpload");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-bold mb-2">Return Reason Selection</h2>
      <p className="mb-4">
        Please let us know the reason for your return to ensure proper disposition of the product.
      </p>
      {reasons.map((reason, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`reason-${index}`}
            checked={selectedReason === reason}
            onChange={() => setSelectedReason(reason)}
            className="mr-2"
          />
          <label htmlFor={`reason-${index}`} className="text-lg">
            {reason}
          </label>
        </div>
      ))}
      {selectedReason === "Other" && (
        <div className="mt-4">
          <label htmlFor="other-reason" className="block mb-2">
            Please Specify:
          </label>
          <input
            type="text"
            id="other-reason"
            className="w-full p-2 border rounded"
          />
        </div>
      )}
      <button
        className="mt-4 bg-black text-white p-2 rounded hover:bg-gray-800"
        onClick={handleConfirm}
        disabled={!selectedReason}
      >
        Confirm
      </button>
    </div>
  );
}
