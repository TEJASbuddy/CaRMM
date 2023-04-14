const express = require("express");
const app = express();
const cors = require("cors");
const carsRoute = require("./routes/carRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/cars", carsRoute);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
