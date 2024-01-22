const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const verify = require("./verify");
const compression = require("compression");






const app = express();

const port = 4000;

dotenv.config();

app.use(compression());

app.use(
  cors({
    origin: "https://client-delta-gold.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders :[
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Credentials"
    ]
  })
);

app.use(helmet());
app.disable("x-powered-by");

app.use(express.json());




 
  app.get('/',verify, (req, res) => {


    res.json({ status: 200, statusText:"OK"})
  })






app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
