const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const verify = require("./verify");
const compression = require("compression");
const {
  newProduct,
  getProduct,
  getProducts,
  orderProduct
} = require("./controllers/productController");

const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
    );
    mongoose.set('strictQuery', false);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};



const app = express();

const port = 4000;

dotenv.config();

app.use(compression());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(helmet());
app.disable("x-powered-by");

app.use(express.json());

dbConnect();


app.use(express.static('public/dist'));

app.get("/api", verify, (req, res) => {
  return res.json({
    Node: "Welcome to node api",
  });
});





app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
