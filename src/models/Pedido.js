const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Venda = require('./Venda');
const Produto = require('./Produto');

const Pedido = sequelize.define('Pedido', {
  quantidade: DataTypes.INTEGER,
  preco_unitario: DataTypes.DECIMAL,
});

Pedido.belongsTo(Venda, { foreignKey: 'venda_id' });
Pedido.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = Pedido;