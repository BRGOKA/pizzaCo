import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalPrice = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);
  return (
    <div className="flex items-center justify-between bg-stone-950 p-4 sm:px-8">
      <p className="space-x-4 font-semibold uppercase text-stone-200">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart" className="font-semibold uppercase text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
