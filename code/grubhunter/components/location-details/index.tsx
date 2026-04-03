import { RestaurantSchema } from "@/mongoose/locations/schema";
import style from "./index.module.css";

interface LocationDetailsProps {
  location: RestaurantSchema;
}

const LocationDetails = ({ location }: LocationDetailsProps) => {
  if (!location) return null;

  return (
    <div className={style.root}>
      <p>{location.address}</p>
      <p>{location.zipcode}</p>
      <p>{location.borough}</p>
      <p>{location.cuisine}</p>
      <p>{location.grade}</p>
    </div>
  );
};

export default LocationDetails;
