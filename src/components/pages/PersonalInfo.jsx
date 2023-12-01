import { useUserContext } from "../context/UserContext";

import ProgressBar from "../custom components/ProgressBar";
import IntroInfo from "../custom components/introInfo";
import PersonalInfoForm from "../forms/PersonalInfoForm";
import Rating from "../custom components/Rating";

export default function PersonalInfo() {
  const { userProgress, stepOne, stepTwo, stepThree } = useUserContext();

  return (
    <div className="onboarding-section">
      <div className="progress-bar">
        <ProgressBar
          userProgress={userProgress}
          stepOne={stepOne}
          stepTwo={stepTwo}
          stepThree={stepThree}
        />
      </div>

      <div className="main-info">
        <IntroInfo name="Tyler" />

        <PersonalInfoForm />

        <Rating />
      </div>
    </div>
  );
}
