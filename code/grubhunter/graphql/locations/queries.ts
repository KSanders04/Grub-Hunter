import {
  findAllLocations,
  findLocationById,
  findWishListLocations,
} from "../../mongoose/locations/services";
import dbConnect from "../../middleware/dbConnect";

export const queryResolvers = {
  allLocations: async () => {
    await dbConnect();
    return await findAllLocations();
  },
  locationsById: async (_: any, { id }: { id: string }) => {
    await dbConnect();
    return await findLocationById({ id });
  },
  onUserWishlist: async (_: any, { userId }: { userId: string }) => {
    await dbConnect();
    return await findWishListLocations({ userId });
  },
};
