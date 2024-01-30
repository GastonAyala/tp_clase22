const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

const createPath = (filename) => path.join(__dirname, `./views/${filename}.html`);
const newRoute = (pagename, filename) => app.get(`/${pagename}`, (req, res) => res.sendFile(createPath(filename)));

app.use(express.static('public'));


newRoute("/", "home");
newRoute("registro", "register");
newRoute("iniciar", "login");

app.listen(port, /*() => console.log(`http://localhost:${port}`)*/);