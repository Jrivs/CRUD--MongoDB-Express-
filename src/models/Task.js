import { Schema, model } from "mongoose";

//Schema is the fields of data
//Model is the name of de data group

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    //Mongosee add a __V to internal function, so we will turn false
    versionKey: false
  }
);

export default model("Task", taskSchema);
//Mongoose create a collection with a plural model name
//For this example it will be tasks (Task)