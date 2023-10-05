import { useEffect, useState } from "react";
import { MAIN_API } from "./constant";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MAIN_API);
      const json = await data.json();
      setStateVariable(json);
    } catch (err) {
      console.error("Server Error");
    }
  };

  const setStateVariable = (jsonData) => {
    if (!jsonData) return;
    jsonData.data.cards.map((item) => {
      if (item.card.card.id == "top_brands_for_you") {
        setListOfRestaurants(
          item.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );
      }
    });
  };

  return listOfRestaurants;
};

export default useRestaurantList;
