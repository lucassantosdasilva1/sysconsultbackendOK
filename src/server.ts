import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  return res.send("Api is running");
});

app.listen(3333, () => {
  console.log("Server is running");
});
