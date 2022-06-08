import { Router } from "express";
import { ProductController } from "../controller/ProductController";

export const router = Router();

const novoProduto = new ProductController();

router.get("/product", novoProduto.list);

router.get("/product/:id", novoProduto.listById);

router.post("/product", novoProduto.create);

router.delete("/product/:id", novoProduto.delete);

router.put("/product/:id", novoProduto.update);
