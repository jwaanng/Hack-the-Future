"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/returns");
  };

  return (
    <div className="bg-[#e9fcff] text-coolGray-800 flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Unboxd.</h1>
      <button
        className="cursor-pointer bg-black p-10 m-10 text-white p-4 rounded-full transition-transform duration-500 hover:scale-200"
        onClick={handleClick}
      >
        <h3 className="text-base bold">Start</h3>
      </button>
    </div>
  );
}
