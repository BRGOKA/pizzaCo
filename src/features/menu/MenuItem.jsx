import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addItem({
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      }),
    );
  }
  return (
    <li className="flex gap-2 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-grow flex-col pl-2">
        <p className="mt-0 pt-0 font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-700">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between font-medium uppercase text-stone-700">
          {!soldOut ? (
            <>
              <p>{formatCurrency(unitPrice)}</p>
              {!soldOut && (
                <Button onclick={handleClick} type={"small"}>
                  Add to cart
                </Button>
              )}
            </>
          ) : (
            <p>Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
