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

app.use((req, res, next) => {
  res.header('Content-Type', 'application/javascript');
  next();
});

if (process.env.NODE_ENV === 'production') {
  // In production, serve the built React Vite app from the 'public/my-vite-app/dist' directory
  app.use(express.static( path.join(__dirname, 'public', '/', 'dist')));

  // Handle all other routes by serving the React app's entry point
 
  app.get('/api', (req, res) => {
    res.json({ status: 200, statusText:"OK"})
  })}






app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
