import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  const[resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API}${id}`);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return (<Shimmer item="menu" />);

  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      {console.log(resInfo)}
      <h1>{name}</h1>
      <p className="menu-cuisines">{cuisines.join(", ")} - Rs {costForTwoMessage}</p>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-items">
        {
          itemCards.map((menu) => (
            <li key={menu.card.info.id}>{menu.card.info.name} - {menu.card.info.price || menu.card.info.defaultPrice}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;