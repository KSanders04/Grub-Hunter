import Link from "next/link";
import { RestaurantSchema } from "@/mongoose/locations/schema";
import styles from "./index.module.css";

type Props = {
  location: RestaurantSchema;
};

const LocationsListItem = ({ location }: Props) => {
  return (
    <li className={styles.root}>
      <Link href={`/location/${location.location_id}`}>
        <h2>{location.name}</h2>
        <small>{location.cuisine}</small>
        <small>{location.borough}</small>
      </Link>
    </li>
  );
};

export default LocationsListItem;
