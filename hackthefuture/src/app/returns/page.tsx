import { ST } from "next/dist/shared/lib/utils";
import Step from "./step";

export default function Returns() {
  return (
    <div className="bg-[#e9fcff] text-coolGray-800 flex flex-col items-center justify-center h-screen space-y-4">
      <Step stepNumber={1} description="Upload Video" routeTo="/returns/videoUpload" />
      <Step stepNumber={2} description="Review and Confirm" routeTo="/returns/review" />
      <Step stepNumber={3} description="Pack and Ship" routeTo="/returns/packAndShip" />
      <Step stepNumber={4} description="Complete" routeTo="/returns/complete" />
    </div>
  );
}
