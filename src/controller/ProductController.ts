import { Request, Response } from "express";
import { Product } from "../models/Product";

export class CreateProductController {
    async create(req: Request, res: Response) {
        //todo: to make a parser to receive the body
        const { nome, preco, estoque } = req.body;


        // const product = await Product.create({
        //     nome,
        //     preco,
        //     estoque
        // });

        const product = new Product();
        product.nome = nome;
        product.preco = preco;
        product.estoque = estoque;
        await product.save();

        return res.json(product);
    }

    //fazer a funcao de listar
    async list(req: Request, res: Response) {
        //todo: to make a parser to receive the body

        // const product = await Product.create({
        //     nome,
        //     preco,
        //     estoque
        // });

        // const product = new Product();
        // product.nome = nome;
        // product.preco = preco;
        // product.estoque = estoque;
        // await product.save();

        // return res.json(product);
    }
}