import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, React triggers a reconcialiation cycle(re-renders the component) 
  console.log("Body rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const setStateVariable = (jsonData) => {
    if (!jsonData) return;
    jsonData.data.cards.map((item) => {
      if (item.card.card.id == "top_brands_for_you") {
        setListOfRestaurants(item.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(item.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
    });
  };

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setStateVariable(json);
    } catch (err) {
      console.error("Server Error");
    }
  };

  const getFilteredRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
    setListOfRestaurants(filteredRestaurants);
  };

  const getSearchedRestaurants = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurants(searchedRestaurants);
  };

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