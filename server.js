const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});

