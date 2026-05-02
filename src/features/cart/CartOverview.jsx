import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <div className="flex items-center justify-between bg-stone-950 p-4 sm:px-8">
      <p className="space-x-4 font-semibold uppercase text-stone-200">
        <span>{cart.length} pizzas</span>
        <span>${total}</span>
      </p>
      <Link to="/cart" className="font-semibold uppercase text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
