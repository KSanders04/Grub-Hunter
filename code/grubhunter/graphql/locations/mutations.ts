import { updateWishList } from "../../mongoose/locations/services";
import dbConnect from "../../middleware/dbConnect";
import { authGuard } from "@/middleware/auth-guards";
import { JWT } from "next-auth/jwt";

interface contextInterface {
  token: JWT;
}

interface WishlistInput {
  userId: string;
  locationId: string;
}

export const mutationResolvers = {
  addWishlist: async (
    _: any,
    { userId, locationId }: WishlistInput,
    context: contextInterface,
  ) => {
    const guard = authGuard({ user_id: userId, location_id: locationId }, context);
    if (guard !== true) return guard;

    await dbConnect();
    return await updateWishList(userId, locationId, "add");
  },
  removeWishlist: async (
    _: any,
    { userId, locationId }: WishlistInput,
    context: contextInterface,
  ) => {
    const guard = authGuard({ user_id: userId, location_id: locationId }, context);
    if (guard !== true) return guard;

    await dbConnect();
    return await updateWishList(userId, locationId, "remove");
  },
};