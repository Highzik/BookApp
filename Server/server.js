import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

/**congifure the connection string environment */
dotenv.config();

/**create a variable and assign express to it */
const app = express();
app.use(express.json());

/**port for server to work on */
const PORT = process.env.PORT || 2022
app.listen(PORT, () => {
  console.log(`App Running on Port ${PORT}`);
});

/**connect to MongoDB */
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to MongoDB`);
  }).catch(err => { console.log("Error connecting to MongoDB"), err });
