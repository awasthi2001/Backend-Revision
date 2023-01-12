import express from "express";
import { Connection } from "./configs/db.js";
import { UserModel } from "./models/user.model.js";
import jwt from "jsonwebtoken";
import Auth from "./middleware/auth.js";
const app = express();
app.use(express.json());
export let secretKey = "akdfg;lkanfdakdsfa";
app.post("/register", async (req, res) => {
  try {
    let { Name, Email, Password } = req.body;
    if (Name && Email && Password) {
      await UserModel.create(req.body);
      res.send("Registered");
    } else {
      res.send("please enter all details");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { Email, Password } = req.body;
    if (Email && Password) {
      let user = await UserModel.findOne(req.body);
      if (user != null) {
        let payload = {
          Email: Email,
        };
        let token = jwt.sign(payload, secretKey);
        res.send({
          message: "Logged in successfully",
          token: token,
        });
      } else {
        res.send("Wrong Credentials");
      }
    } else {
      res.send("please enter all details");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

app.get("/cart", Auth, (req, res) => {
  res.send("Cart");
});

app.get("/data", Auth, (req, res) => {
  res.send("Data");
});

app.listen(8080, async () => {
  try { 
    let res = await Connection();
    console.log(res);
    console.log("Running on port 8080");
  } catch (error) {
    console.log("Failed to connect");
  }
});
