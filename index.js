const express = require('express');
const app = express();
const PORT = process.env.PORT;

//Endpoint que responde un mensaje
app.get('/', (_req, res) => {
    res.send('Integracion continua funcionando bien');
});

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});
