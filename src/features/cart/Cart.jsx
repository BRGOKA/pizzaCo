import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const dispach = useDispatch();
  function handleClear() {
    dispach(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-900 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="b mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onclick={handleClear} type="seconday">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
