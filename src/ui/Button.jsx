import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  if (to) return <Link to={to}>{children}</Link>;
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wider transition-colors duration-500 hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-900 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
