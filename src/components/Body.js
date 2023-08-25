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
    const filteredRestaurants = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurants(filteredRestaurants);
  };

  const getSearchedRestaurants = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurants(searchedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="search-text" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="search" />
          <button className="search-btn" onClick={() => listOfRestaurants.filter(getSearchedRestaurants)}>Search</button>
        </div>
        <button className="filter-btn" onClick={getFilteredRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        { !listOfRestaurants?.length
          ? <Shimmer item="restaurants" />
          : filteredRestaurants?.map((restaurant) => <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>)
        }
      </div>
    </div>
  );
};

export default Body;