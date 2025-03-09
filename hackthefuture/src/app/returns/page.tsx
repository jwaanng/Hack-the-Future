"use client";

import { useState } from "react";
import Step from "./step";
import ReasonSelect from "./reasonSelect";

export default function Returns() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepComplete = (stepNumber: number) => {
    setCompletedSteps((prev) => [...prev, stepNumber]);
  };

  return (
    <div className="bg-[#e9fcff] flex flex-row justify-between h-screen">
      <div className="flex flex-col items-center justify-center space-y-4 ml-10">
        <Step
          stepNumber={1}
          description="Select Reason"
          routeTo="/returns/videoUpload"
          onComplete={() => handleStepComplete(1)}
        />
        {completedSteps.includes(1) && (
          <Step
            stepNumber={2}
            description="Video and Grading"
            routeTo="/returns/videoUpload"
            onComplete={() => handleStepComplete(2)}
          />
        )}
        {completedSteps.includes(2) && (
          <Step
            stepNumber={3}
            description="Pack and Ship"
            routeTo="/returns/packAndShip"
            onComplete={() => handleStepComplete(3)}
          />
        )}
        {completedSteps.includes(3) && (
          <Step
            stepNumber={4}
            description="Complete"
            routeTo="/returns/complete"
            onComplete={() => handleStepComplete(4)}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <ReasonSelect onConfirm={() => handleStepComplete(1)} />
      </div>
    </div>
  );
}
