import mongoose, { InferSchemaType } from "mongoose";

const restaurantSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  address: { type: String, required: true },
  zipcode: { type: String, required: true },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grade: { type: String, required: true },
  name: { type: String, required: true },
  on_wishlist: { type: Array, required: true },
  location_id: { type: String, required: true },
});

type RestaurantSchema = InferSchemaType<typeof restaurantSchema>;
export type { RestaurantSchema };
export default restaurantSchema;
