import mongoose from "mongoose";
import restaurantSchema from "./schema";

const RestaurantModel = mongoose.models.Location || mongoose.model("Location", restaurantSchema);

export default RestaurantModel;
