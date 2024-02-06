import React from "react";

const StepperControl = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        id="back"
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer boarder-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        Back
      </button>
      <button
        id="next"
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        Next
      </button>
    </div>
  );
};

export default StepperControl;
