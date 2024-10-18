const express = require('express');
const router = express.Router();

// Simulación de base de datos
let users = [
    { id: 1, name: "Hola Mundo" }
];

// API para crear un usuario
router.post('/add', (req, res) => {
    const { name } = req.body;
    const newUser  = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// API para obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;