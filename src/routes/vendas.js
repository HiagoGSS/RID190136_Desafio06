const express = require('express');
const router = express.Router();
const controller = require('../controllers/vendaController');

router.post('/', controller.criarVenda);
router.get('/', controller.listarVendas);

module.exports = router;