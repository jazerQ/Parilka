"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require("./routes/reg");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
app.use(express.static(path.resolve(__dirname, 'views')));
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.sendFile('index', function (err) {
        if (err) {
            console.log(err);
        }
    });
});
app.get('/lib', function (req, res) {
    res.sendFile('C:\\Users\\Jazer\\Desktop\\parilka\\pages\\express\\views\\index1.html', function (err) {
        if (err) {
            console.log(err);
        }
    });
});
app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});
app.listen(port, function () {
    console.log("Server already running: http://localhost:".concat(port, "/"));
});
