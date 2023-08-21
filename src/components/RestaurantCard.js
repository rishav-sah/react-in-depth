import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = props?.resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={`${CDN_URL}/${cloudinaryImageId}`} alt="res-image" />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;