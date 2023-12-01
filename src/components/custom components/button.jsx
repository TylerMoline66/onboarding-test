export default function Button({ children, ...props }) {
  return (
    <button className="confirm-next-button" {...props}>
      {children}
    </button>
  );
}
