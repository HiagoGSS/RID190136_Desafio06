const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dncommerce', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = sequelize;