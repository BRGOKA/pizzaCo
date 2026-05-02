import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, delItem } from "../cart/cartSlice";
import { getCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const cart = useSelector(getCart);
  const itemExistInCart = cart.some((item) => item.pizzaId === id);
  console.log(itemExistInCart);

  const dispatch = useDispatch();

  function handleClick() {
    if (!itemExistInCart) {
      dispatch(
        addItem({
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice * 1,
        }),
      );
    } else if (itemExistInCart) {
      dispatch(delItem(id));
    }
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
                  {itemExistInCart ? "Delete" : "Add to cart"}
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
