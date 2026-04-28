import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="overflow-hidden rounded-t-xl bg-amber-200 shadow-lg transition-all duration-300 hover:scale-110 hover:cursor-pointer">
      <img
        className="w-screen transition-all duration-300 hover:scale-110"
        src={imageUrl}
        alt={name}
      />
      <div className="p-2">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
