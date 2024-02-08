// MultiStepForm.js
import React, { useState } from "react";

// Component for each step of the form
const Step = ({ step, activeStep, children }) => {
  return (
    <div style={{ display: step === activeStep ? "block" : "none" }}>
      {children}
    </div>
  );
};

// Main MultiStepForm component
const MultiStepForm = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Function to handle next step
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  // Function to handle previous step
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      {/* Step 1 */}
      <Step step={1} activeStep={activeStep}>
        {/* Your Step 1 Form Content */}
        <button onClick={handleNext}>Next</button>
      </Step>

      {/* Step 2 */}
      <Step step={2} activeStep={activeStep}>
        {/* Your Step 2 Form Content */}
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </Step>

      {/* Step 3 */}
      <Step step={3} activeStep={activeStep}>
        {/* Your Step 3 Form Content */}
        <button onClick={handlePrev}>Previous</button>
        <button>Submit</button>
      </Step>
    </div>
  );
};

export default MultiStepForm;
