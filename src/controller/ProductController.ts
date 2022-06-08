import { Request, Response } from "express";
import { Product } from "../models/Product";

export class ProductController {
  //Criar novo produto
  async create(req: Request, res: Response) {
    const { nome, preco, estoque } = req.body;

    const product = new Product();
    product.nome = nome;
    product.preco = preco;
    product.estoque = estoque;
    await product.save();

    return res.json(product);
  }

  //Listar Produtos
  async list(req: Request, res: Response) {
    try {
      const product = await Product.findAll();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Atualiza produtobyID
  async update(req: Request, res: Response) {
    const idReq = req.params.id;

    const productexists = await Product.findByPk(idReq);
    if (!productexists) {
      res.status(422).json({ message: "Produto não encontrado!" });
      return;
    }

    try {
      console.log(req.body);

      await Product.update(
        {
          nome: req.body.nome,
          preco: req.body.preco,
          estoque: req.body.estoque,
        },
        {
          where: {
            id: idReq,
          },
        }
      );

      res.status(200).json({ message: "Produto alterado com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Apagar ProdutobyID
  async delete(req: Request, res: Response) {
    const idReq = req.params.id;

    console.log("idreq: ", idReq);

    const productexists = await Product.findByPk(idReq);

    if (!productexists) {
      res.status(422).json({ message: "Produto não encontrado!" });
      return;
    }

    try {
      await Product.destroy({
        where: {
          id: idReq,
        },
      });

      res.status(200).json({ message: "Produto removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Lista ByID
  async listById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product = await Product.findByPk(id);

      res.status(200).json(product);
    } catch (error) {}
  }
}
