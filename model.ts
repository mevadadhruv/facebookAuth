import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    sid: {
      type: Number,
    },
    emailId: {
      type: String,
      required: "Please enter email",
    },
    password: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    phone_number: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("users", userSchema);
