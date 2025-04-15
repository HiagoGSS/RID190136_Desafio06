const Cliente = require('../models/Cliente');

exports.criarCliente = async (req, res) => {
  const { nome, email, telefone } = req.body;
  const cliente = await Cliente.create({ nome, email, telefone });
  res.status(201).json(cliente);
};

exports.listarClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};