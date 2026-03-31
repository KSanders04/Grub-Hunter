import { RestaurantSchema } from "@/mongoose/locations/schema";
import style from "./index.module.css";

interface LocationDetailsProps {
  location: RestaurantSchema;
}

const LocationDetails = ({ location }: LocationDetailsProps) => {
  if (!location) return null;

  return (
    <ul className={style.root}>
      <li>{location.address}</li>
      <li>{location.zipcode}</li>
      <li>{location.borough}</li>
      <li>{location.cuisine}</li>
      <li>{location.grade}</li>
    </ul>
  );
};

export default LocationDetails;
