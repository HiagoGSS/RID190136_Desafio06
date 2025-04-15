const Venda = require('../models/Venda');
const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');

exports.criarVenda = async (req, res) => {
  const { cliente_id, produtos } = req.body;
  let valor_total = 0;

  for (let item of produtos) {
    const produto = await Produto.findByPk(item.produto_id);
    valor_total += produto.preco * item.quantidade;
    produto.estoque_atual -= item.quantidade;
    await produto.save();
  }

  const venda = await Venda.create({ cliente_id, data: new Date(), valor_total });

  for (let item of produtos) {
    await Pedido.create({
      venda_id: venda.id,
      produto_id: item.produto_id,
      quantidade: item.quantidade,
      preco_unitario: item.preco_unitario,
    });
  }

  res.status(201).json(venda);
};

exports.listarVendas = async (req, res) => {
  const vendas = await Venda.findAll();
  res.json(vendas);
};