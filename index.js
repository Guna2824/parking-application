console.log("welcome NodeJS backend!");

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
// const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const user = require("./user");

app.use(cors());

app.use(express.json());

app.get("/get", (req, res) => {
  user
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
  // console.log("user data get");
});

app.get("/check", (req, res) => {
  user
    .find({ status: "vehicle IN" })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
  // console.log("get checkout data");
});

app.get("/uniqcheck/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  user
    .findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
  // console.log("uniqcheck ok");
});

app.put("/checkout/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  user
    .findByIdAndUpdate(
      { _id: id },
      { status: req.body.status, updateAt: req.body.updateAt }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
  // console.log("User updated");
});

app.post("/post", (req, res) => {
  const { vehicleNo, vehicleType, userName, phoneNumber } = req.body;
  const User = new user({ vehicleNo, vehicleType, userName, phoneNumber });
  // console.log(vehicleNo, vehicleType, userName, phoneNumber);

  User.save();
});

connectDB();

app.listen(port, () => {
  console.log("port running", "http://localhost:" + port);
});
