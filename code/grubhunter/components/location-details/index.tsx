import { RestaurantSchema } from "@/mongoose/locations/schema";
import style from "./index.module.css";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Button from "../button";

interface WishListInterface {
  locationId: string;
  userId: string | undefined;
}

interface LocationDetailsProps {
  location: RestaurantSchema;
}

const LocationDetails = ({ location }: LocationDetailsProps) => {
  const { data: session } = useSession();
  const [onWishlist, setOnWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = session?.user?.fdlst_private_userId;
    setOnWishlist(!!(userId && location.on_wishlist.includes(userId)));
  }, [session, location]);

  const wishlistAction = async ({ locationId, userId }: WishListInterface) => {
    if (loading) return;
    setLoading(true);
    const mutation = onWishlist
      ? `mutation { removeFromWishlist(locationId: "${locationId}", userId: "${userId}") { _id } }`
      : `mutation { addToWishlist(locationId: "${locationId}", userId: "${userId}") { _id } }`;
    const response = await fetch("/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: mutation }),
    });
    if (response.ok) {
      setOnWishlist(!onWishlist);
    }
    setLoading(false);
  };

  if (!location) return null;

  return (
    <div className={style.root}>
      <p>{location.address}</p>
      <p>{location.zipcode}</p>
      <p>{location.borough}</p>
      <p>{location.cuisine}</p>
      <p>{location.grade}</p>

      {session?.user?.fdlst_private_userId && (
        <Button
          variant={onWishlist ? "outlined" : "blue"}
          disabled={loading}
          clickHandler={() =>
            wishlistAction({
              locationId: location._id,
              userId: session.user.fdlst_private_userId,
            })
          }
        >
          {onWishlist ? "Remove from your Wishlist" : "Add to your Wishlist"}
        </Button>
      )}
    </div>
  );
};

export default LocationDetails;
