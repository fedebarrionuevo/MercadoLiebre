const express = require('express');
const path = require('path');
const rutasLogin = require('./routes/users');
const rutasMain = require('./routes/main')
const app = express();

app.set("view engine", "ejs");

app.use('/', rutasLogin, rutasMain)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});

app.use(express.static('./public'));