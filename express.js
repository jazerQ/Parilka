var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname, 'views')));
var port = 3000;
app.get('/', function (req, res) {
    res.render('index', function (err) {
        if (err) {
            console.log(err);
        }
    });
});
// app.post('/lib', (req, res) => {
//     res.json(req)
// })
// app.get('/lib', (req, res) => {
//     res.json(req)
// })
app.route('/lib')
    .get(function (req, res) {
    res.send('jcioj');
})
    .post(function (req, res) {
    res.send(req.body);
});
app.post('/quiz', function (req, res) {
    res.render('index', function (err) {
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
