"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";

export default function VideoUpload() {
  const instructions = [
    "Show the front view",
    "Show the back view",
    "Show the product label/tag (if applicable)",
    "Show the right side",
    "Show the left side",
  ];

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 30ms interval for 3 seconds total
    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => {
    router.push("/returns/getGrading");
  };

  return (
    <div className="bg-[#e9fcff] flex flex-row justify-between h-screen">
      <div className="flex flex-col items-start justify-center space-y-4 p-10 w-1/2">
        <h2 className="text-2xl font-bold mb-4">Please show your item to the camera.</h2>
        {/* {instructions.map((instruction, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`instruction-${index}`} className="mr-2" />
            <label htmlFor={`instruction-${index}`} className="text-lg">
              {instruction}
            </label>
          </div>
        ))} */}
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 m-16">
        <Webcam className="rounded-lg shadow-md mb-4 w-full" />
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-black h-4 rounded-full"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        {loadingComplete && (
          <button
            className="mt-4 bg-black text-white p-2 rounded hover:bg-gray-800"
            onClick={handleConfirm}
          >
            Get your Grading
          </button>
        )}
      </div>
    </div>
  );
}
