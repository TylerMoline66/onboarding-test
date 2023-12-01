export default function IntroInfo({ name }) {
  return (
    <div className="welcome-container">
      <div className="welcome">Welcome, {name}!</div>
      <div className="instructions">
        Let's make this easy-Please verify the information below is correct.
      </div>
    </div>
  );
}
