const Produto = require('../models/Produto');

exports.criarProduto = async (req, res) => {
  const { nome, descricao, preco, estoque_atual } = req.body;
  const produto = await Produto.create({ nome, descricao, preco, estoque_atual });
  res.status(201).json(produto);
};

exports.listarProdutos = async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
};