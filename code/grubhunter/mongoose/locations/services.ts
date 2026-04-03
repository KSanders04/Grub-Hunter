import RestaurantModel from "./model";
import { FindByIdType, WishListType } from "./custom";

export const findAllLocations = async () => {
  return await RestaurantModel.find();
};

export const findLocationById = async ({ id }: FindByIdType) => {
  const location = await RestaurantModel.findOne({ location_id: id });
  return location;
};

export const findWishListLocations = async ({ userId }: WishListType) => {
  return await RestaurantModel.find({ on_wishlist: userId });
};

export const updateWishList = async (
  userId: string,
  locationId: string,
  action: "add" | "remove",
) => {
  const location = await RestaurantModel.findById(locationId);
  if (!location) {
    throw new Error("Location not found");
  }
  const on_wishlist = location.on_wishlist || [];
  if (action === "add") {
    if (!on_wishlist.includes(userId)) {
      location.on_wishlist = [...on_wishlist, userId];
    }
  } else {
    location.on_wishlist = on_wishlist.filter((id: string) => id !== userId);
  }
  await location.save();
  return location;
};
