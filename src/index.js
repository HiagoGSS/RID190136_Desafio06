const express = require('express');
const app = express();
const sequelize = require('./db');
const produtoRoutes = require('./routes/produtos');
const clienteRoutes = require('./routes/clientes');
const vendaRoutes = require('./routes/vendas');

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/vendas', vendaRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});