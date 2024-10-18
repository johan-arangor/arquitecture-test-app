const express = require('express');
const router = express.Router();

// Simulación de base de datos
let products = [
    { id: 1, name: "Hola Producto" }
];

// API para crear un producto
router.post('/add', (req, res) => {
    const { name } = req.body;
    const newProduct = { id: products.length + 1, name };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// API para obtener todos los productos
router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;