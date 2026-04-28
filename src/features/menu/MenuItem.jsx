import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
              <Button type={"small"}>Add to cart</Button>
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
