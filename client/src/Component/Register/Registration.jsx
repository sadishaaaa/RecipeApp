import React, { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { StepperContext } from "../../Contexts/StepperContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [currentStep, setcurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Personal Information", "Account Information", "Confirm"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setcurrentStep(newStep);
    console.log(userData);
  };
  const handleConfirm = async () => {
    try {
      console.log(userData);
      await axios.post("http://localhost:8000/auth/register", userData);
      console.log("User data successfully posted!");
      navigate("/");
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Registration;
