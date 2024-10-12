import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

/**congifure the connection string environment*/
dotenv.config();

/**create a variable and assign express to it*/
const app = express();
app.use(express.json());

/**create the server port to work on*/
const PORT = process.env.PORT || 2020
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});

/**connect mongoose go mongoDB */
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  }).catch(err => { console.log("Error Connecting to MongoDB"), err });