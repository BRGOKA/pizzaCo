import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wider transition-colors duration-500 hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-900 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 sm:px-5 sm:py-3 ",
    small: base + "px-2 py-2 sm:px-3 sm:py-2 text-xs",
    seconday:
      "tracking-wider transition-colors duration-500 text-stone-400 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase px-4 py-2.5 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
