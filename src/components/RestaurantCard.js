import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = props?.resData?.info;
  return (
    <div className="rounded-lg p-4 w-auto shadow-md">
      <div className="mb-6 w-50 h-40 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={`${CDN_URL}/${cloudinaryImageId}`} alt="res-image" />
      </div>
      <h3 className="my-2 text-xl font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</h3>
      <h4 className="my-2 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">{cuisines.join(", ")}</h4>
      <h4 className="my-2 text-sm">{avgRating}</h4>
      <h4 className="my-2 text-sm">{costForTwo}</h4>
      <h4 className="my-2 text-sm">{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;