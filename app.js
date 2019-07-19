var express = require('express');
var app = express();

var ContentController = require('./content/ContentController');
var ContactsController = require('./contacts/ContactController');
var MenuController = require('./menu/MenuController');
var PriceController = require('./prices/PriceController');
var PartnerController = require('./partners/PartnerController');
var ServiceController = require('./services/ServiceController');
var UserController = require('./users/UserController');
var UploadController = require('./upload/UploadController');
var LogoController = require('./logos/LogoController');

app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/contacts', ContactsController);
app.use('/content', ContentController);
app.use('/menu', MenuController);
app.use('/prices', PriceController);
app.use('/partners', PartnerController);
app.use('/services', ServiceController);
app.use('/user', UserController);
app.use('/upload', UploadController);
app.use('/logos', LogoController);

module.exports = app;
