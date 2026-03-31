import { RestaurantSchema } from "@/mongoose/locations/schema";
import LocationsListItem from "../locations-list-item";
import style from "./index.module.css";

interface LocationsListProps {
  locations: RestaurantSchema[];
}

const LocationsList: React.FC<LocationsListProps> = ({ locations }) => {
  return (
    <ul className={style.root}>
      {locations.map((location) => (
        <LocationsListItem key={location.location_id} location={location} />
      ))}
    </ul>
  );
};

export default LocationsList;
