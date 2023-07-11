import mongoose from "mongoose";
export function DatabaseConnection() {
  mongoose
    .connect(`${String(process.env.DB)}`)
    .then(() => {
      console.log("connected sucessfully!!");
    })
    .catch((err) => {
      console.log(err);
    });
}
