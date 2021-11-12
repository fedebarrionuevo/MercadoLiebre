const express = require('express');
const path = require('path');
const rutasLogin = require('./routes/users');
const rutasMain = require('./routes/main')
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");

app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', rutasLogin, rutasMain)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});

app.use(express.static('./public'));