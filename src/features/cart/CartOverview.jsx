import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-950 p-4 sm:px-8">
      <p className="space-x-4 font-semibold uppercase text-stone-200">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="font-semibold uppercase text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
