const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Tito Bot Now Online!'));

app.listen(port, () => console.log(`Harmony is listening to http://localhost:${port}`));