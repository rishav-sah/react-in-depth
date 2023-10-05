import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  // Local State Variable - Super powerful variable
  const listOfRestaurants = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, React triggers a reconcialiation cycle(re-renders the component)
  console.log("Body rendered");

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const getFilteredRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4,
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const getSearchedRestaurants = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(searchedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return (
    <div className="mx-auto bg-gray-200 p-4 text-gray-800">
      <div className="my-6 justify-center text-center md:flex">
        <div className="mx-4">
          <input
            className="w-80 rounded px-4 py-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search"
          />
          <button
            className="ml-2 rounded-md bg-gray-400 px-4 py-2 font-medium"
            onClick={() => listOfRestaurants.filter(getSearchedRestaurants)}
          >
            Search
          </button>
        </div>
        <button
          className="rounded-md bg-gray-400 px-4 py-2 font-medium text-gray-800"
          onClick={getFilteredRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!listOfRestaurants?.length ? (
          <Shimmer item="restaurants" />
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
