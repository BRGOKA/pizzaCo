import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="text-sm">
      <div className="flex items-center justify-between gap-2">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
