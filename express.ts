let express = require('express')
let app = express();
let path = require('path');
app.use(express.static(path.resolve(__dirname,'views')))
const port = 3000;

app.get('/', (req, res) => {
    res.render('index', (err) => {
        if(err){
            console.log(err)
        }
    })
  })
// app.post('/lib', (req, res) => {
//     res.json(req)
// })
// app.get('/lib', (req, res) => {
//     res.json(req)
// })
app.route('/lib')
    .get(function(req, res) {
        res.send(req.body);
    })
    .post(function(req, res) {
        res.send(req.body);
    })
app.post('/quiz', (req, res) => {
    res.render('index', (err) => {
        if(err){
            console.log(err)
        }
    })
})
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});
app.listen(port, () => {
    console.log(`Server already running: http://localhost:${port}/`)
  })