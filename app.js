var express = require('express')
var app= express()
app.use('/assets',express.static('assets'));
app.use('/scripts',express.static('scripts'));
app.use(express.static('public'));
app.listen(80);
