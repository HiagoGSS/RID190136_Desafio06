const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.post('/', controller.criarProduto);
router.get('/', controller.listarProdutos);

module.exports = router;