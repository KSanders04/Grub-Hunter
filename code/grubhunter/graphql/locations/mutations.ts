import { updateWishList } from "../../mongoose/locations/services";
import dbConnect from "../../middleware/dbConnect";

interface WishlistInput {
  userId: string;
  locationId: string;
}

export const mutationResolvers = {
  addWishlist: async (
    _: any,
    { userId, locationId }: WishlistInput,
    context: any,
  ) => {
    await dbConnect();
    return await updateWishList(userId, locationId, "add");
  },
  removeWishlist: async (
    _: any,
    { userId, locationId }: WishlistInput,
    context: any,
  ) => {
    await dbConnect();
    return await updateWishList(userId, locationId, "remove");
  },
};
