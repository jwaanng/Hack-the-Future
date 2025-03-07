import { ST } from "next/dist/shared/lib/utils";
import Step from "./step";
import CircularProgress from '@mui/joy/CircularProgress';

export default function Returns() {
  return (
    <div>
      <div className="bg-[#e9fcff] flex flex-row justify-between border border-red-500">
        <div className="justify-items-start border border-red-500">
          <div className="text-coolGray-800 flex flex-col items-center justify-center h-screen space-y-4 ml-35">
            <Step stepNumber={1} description="Upload Video" routeTo="/returns/videoUpload" />
            <Step stepNumber={2} description="Review and Confirm" routeTo="/returns/review" />
            <Step stepNumber={3} description="Pack and Ship" routeTo="/returns/packAndShip" />
            <Step stepNumber={4} description="Complete" routeTo="/returns/complete" />
          </div>
        </div>
        <div className="justify-center w-full h-full p-1/2 border border-blue-500">
          <CircularProgress determinate value={75} size="lg" className="w-full"/>
        </div>
      </div>
    </div>
  );
}
