import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props?.resData?.info;
  return (
    <div className="w-auto rounded-lg p-4 shadow-md">
      <div className="w-50 mb-6 h-40 overflow-hidden rounded-md">
        <img
          className="h-full w-full object-cover"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="res-image"
        />
      </div>
      <h3 className="my-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl font-semibold">
        {name}
      </h3>
      <h4 className="my-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">
        {cuisines.join(", ")}
      </h4>
      <h4 className="my-2 text-sm">{avgRating}</h4>
      <h4 className="my-2 text-sm">{costForTwo}</h4>
      <h4 className="my-2 text-sm">{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
