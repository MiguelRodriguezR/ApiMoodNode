const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let moods = []; // Almacenará los estados de ánimo en memoria

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/moods', (req, res) => {
    const { email } = req.query;
    const userMoods = moods.filter(mood => mood.user === email);
    res.json(userMoods);
});

app.post('/moods', (req, res) => {
    const newMood = req.body;
    newMood.id = moods.length + 1; // Asignar un ID simple
    moods.push(newMood);
    res.status(201).send('mood Registered');
});