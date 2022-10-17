import { MONGODB_URI } from "./config";
import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect(
      MONGODB_URI || "mongodb://localhost/test"
    );
    console.log("DB connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
