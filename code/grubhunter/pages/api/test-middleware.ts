import dbConnect from "@/middleware/dbConnect";
import RestaurantModel from "@/mongoose/locations/model";

export default async function handler(req: any, res: any) {
  try {
    await dbConnect();
    const data = await RestaurantModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in middleware test:", error);
    res.status(500).json({ message: "Middleware test failed!" });
  }
}
