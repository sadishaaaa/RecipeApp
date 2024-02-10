import React from "react";

const StepperControl = ({ handleClick, handleConfirm, currentStep, steps }) => {
  const handleButtonClick = () => {
    if (currentStep === steps.length - 1) {
      // If it's the last step, trigger the confirm click handling
      handleConfirm();
    } else {
      // Otherwise, proceed to the next step
      handleClick("next");
    }
  };
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={handleButtonClick}
        id="back"
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        onClick={handleButtonClick}
        id="next"
        className={`bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out `}
      >
        {currentStep === steps.length - 1 ? "confirm" : "next"}
      </button>
    </div>
  );
};

export default StepperControl;
