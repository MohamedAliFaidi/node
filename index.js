const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const verify = require("./verify");
const compression = require("compression");
const path = require("path");






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



app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/api", verify, (req, res) => {
  return res.json({
    Node: "Welcome to node api",
  });
});





app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
