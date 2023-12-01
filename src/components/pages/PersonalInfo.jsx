import { useUserContext } from "../context/UserContext";

import ProgressBar from "../custom components/ProgressBar";
import IntroInfo from "../custom components/introInfo";
import PersonalInfoForm from "../forms/PersonalInfoForm";
import Rating from "../custom components/Rating";

export default function PersonalInfo() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    userProgress,
    stepOne,
    stepTwo,
    stepThree,
  } = useUserContext();

  return (
    <div className="onboarding-section">
      <ProgressBar
        userProgress={userProgress}
        stepOne={stepOne}
        stepTwo={stepTwo}
        stepThree={stepThree}
      />

      <IntroInfo name="Tyler" />

      <PersonalInfoForm />

      <Rating />
    </div>
  );
}
