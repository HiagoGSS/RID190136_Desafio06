const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Cliente = require('./Cliente');

const Venda = sequelize.define('Venda', {
  data: DataTypes.DATE,
  valor_total: DataTypes.DECIMAL,
});

Venda.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Venda;