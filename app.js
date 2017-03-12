var express = require('express')
var app= express()
var open = require("open");

app.use('/assets',express.static('assets'));
app.use('/scripts',express.static('scripts'));
app.use(express.static('public'));
app.listen(3001);

open("http://localhost:3001/index.html");
