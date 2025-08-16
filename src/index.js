const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/dev-comunidad-tutoriales', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('¡Bienvenidos a la plataforma de tutoriales!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});