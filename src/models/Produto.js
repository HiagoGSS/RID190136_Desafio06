const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  preco: DataTypes.DECIMAL,
  estoque_atual: DataTypes.INTEGER,
});

module.exports = Produto;