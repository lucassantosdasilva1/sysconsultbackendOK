import bodyParser from "body-parser";
import express from "express";
import { CreateProductController } from "./controller/ProductController";

const app = express();
app.use(bodyParser.json());

const novoProduto = new CreateProductController();

app.get("/", (req, res) => {
  return res.send("Api is running");
});


app.post("/product", novoProduto.create);

app.listen(3333, () => {
  console.log("Server is running");
});
