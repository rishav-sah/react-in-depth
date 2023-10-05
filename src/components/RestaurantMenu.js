import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer item="menu" />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info || [];
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p className="menu-cuisines">
        {cuisines.join(", ")} - Rs {costForTwoMessage}
      </p>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-items">
        {itemCards.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name} -{" "}
            {menu.card.info.price || menu.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
