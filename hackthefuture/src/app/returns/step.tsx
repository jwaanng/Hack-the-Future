'use client';
import { useRouter } from "next/navigation";

export default function Step({ stepNumber, description, routeTo }: { stepNumber: number; description: string; routeTo: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(routeTo);
  };

  return (
    <div className="bg-black rounded-lg p-6 m-4 cursor-pointer w-96" onClick={handleClick}>
      <h2 className="text-2xl text-white text-base">{stepNumber}. {description}</h2>
    </div>
  );
}
