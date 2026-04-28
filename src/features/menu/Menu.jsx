import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="bg-yellow-100">
      <h1 className="mb-8 flex justify-center pt-8 text-2xl font-bold">Menu</h1>
      <ul className="grid grid-cols-3 gap-6 px-6 md:grid-cols-5">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
