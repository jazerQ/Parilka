require('dotenv').config();
let express = require('express')
let app = express();
let path = require('path');
var bodyParser = require('body-parser')
const cors = require('cors');
import * as router from './routes/reg'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
app.use(express.static(path.resolve(__dirname,'views')))
app.use(cors());
app.use(express.json());
app.use('/api', router)
app.use(bodyParser.urlencoded({
    extended: true
  }));

// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile('index', (err) => {
        if(err){
            console.log(err)
        }
    })
  })
// app.post('/lib', (req, res) => {
//     res.json(req)
// })
app.get('/lib', (req, res) => {
    res.sendFile('C:\\Users\\Jazer\\Desktop\\parilka\\pages\\express\\views\\index1.html', (err) =>{
        if(err){
            console.log(err)
        }
    })
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