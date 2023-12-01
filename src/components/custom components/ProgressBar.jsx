export default function ProgressBar(props) {
  const { userProgress, stepOne, stepTwo, stepThree } = props;

  return (
    <div className="progress-wrapper">
      <div className="main-container">
        <div className="title">Onboarding</div>
        <div className="steps-completed">{userProgress}/3 steps complete!</div>
      </div>
      <div className="steps">
        <div className="personal-info">
          <input
            type="radio"
            name="personal-info"
            id="personal-info"
            disabled={true}
            checked={stepOne}
          />
          <label htmlFor="personal-info">
            <span>Personal Info</span>
          </label>
        </div>

        <div className="monthly-orders">
          <input
            type="radio"
            name="monthly-orders"
            id="monthly-orders"
            disabled={true}
            checked={stepTwo}
          />
          <label htmlFor="monthly-orders">
            Monthly Orders <span>Required</span>
          </label>
        </div>

        <div className="billing">
          <input
            type="radio"
            name="billing"
            id="billing"
            disabled={true}
            checked={stepThree}
          />
          <label htmlFor="billing">
            Billing <span>Required</span>
          </label>
        </div>
      </div>
    </div>
  );
}
