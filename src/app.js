const express = require('express');
const userRoutes = require('./api/user');
const productRoutes = require('./api/product');

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;