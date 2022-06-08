import express from "express";
import { ProductController } from "./controller/ProductController";

const app = express();
app.use(express.json());

const novoProduto = new ProductController();

app.get("/", (req, res) => {
  return res.send("Api is running");
});

app.get("/product", novoProduto.list);

app.get("/product/:id", novoProduto.listById);

app.post("/product", novoProduto.create);

app.delete("/product/:id", novoProduto.delete);

app.put("/product/:id", novoProduto.update);

app.listen(3333, () => {
  console.log("Server is running");
});
