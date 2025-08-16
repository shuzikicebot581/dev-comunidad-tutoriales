const express = require('express');
const Tutorial = require('../models/Tutorial');
const router = express.Router();

// Obtener todos los tutoriales
router.get('/', async (req, res) => {
  const tutorials = await Tutorial.find();
  res.json(tutorials);
});

// Crear un nuevo tutorial
router.post('/', async (req, res) => {
  const { title, content, category } = req.body;
  const newTutorial = new Tutorial({ title, content, category });
  await newTutorial.save();
  res.status(201).json(newTutorial);
});

module.exports = router;