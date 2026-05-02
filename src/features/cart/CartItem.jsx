import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decItemQuant, delItem, incItemQuant } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispach = useDispatch();
  function handleDelete() {
    dispach(delItem(pizzaId));
  }
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <div>
          <Button onclick={() => dispach(decItemQuant(pizzaId))} type="small">
            -
          </Button>
          <input
            className="w-8 bg-transparent text-center"
            value={quantity}
            disabled
          />
          <Button onclick={() => dispach(incItemQuant(pizzaId))} type="small">
            +
          </Button>
        </div>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button onclick={handleDelete} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
