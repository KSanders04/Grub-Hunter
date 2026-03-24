import dbConnect from "@/middleware/dbConnect";
import { findAllLocations } from "@/mongoose/locations/services";

export default async function handler(req: any, res: any) {
  try {
    await dbConnect();
    const allLocations = await findAllLocations();
    console.log("All locations:", allLocations);
    res.status(200).send(JSON.stringify(allLocations));
  } catch (error) {
    console.error("Error in test services endpoint:", error);
    res.status(500).json({ message: "Test services endpoint failed!" });
  }
}
