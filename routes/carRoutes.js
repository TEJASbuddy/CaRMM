const express = require("express");
const router = express.Router();

let cars = [];

router.post("/create", (req, res) => {
  const car = req.body;
  cars.push(car);
  res.send(car);
});

router.get("/", (req, res) => {
  res.send(cars);
});

router.get("/:id", (req, res) => {
  const car = cars.find((c) => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send("Car not found");
  res.send(car);
});

router.put("/:id", (req, res) => {
  const car = cars.find((c) => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send("Car not found");

  car.name = req.body.name;
  car.color = req.body.color;
  car.price = req.body.price;

  res.send(car);
});

router.delete("/:id", (req, res) => {
  const car = cars.find((c) => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send("Car not found");

  const index = cars.indexOf(car);
  cars.splice(index, 1);

  res.send(car);
});

module.exports = router;
