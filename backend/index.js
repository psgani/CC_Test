const connectToMongo = require('./db');

connectToMongo();

var express = require('express');
var cors = require('cors')
var app = express()
 
// app.use(cors(
//     {
//      origin: ["https://cc-test-p3mt.vercel.app"],
//      methods:["POST", "GET"],
//      credentails: true
//     }
//    ))
app.use(cors({ origin: "https://cc-test-p3mt.vercel.app", credentials: true }));

app.use(express.json())

const port = 5000;

app.use('/api/auth',require('./routes/auth'))
app.use('/api/question',require('./routes/question')) 
app.use('/api/blog',require('./routes/blog'))
app.use('/api/answer',require('./routes/answer'))
app.use('/api/count',require('./routes/count'))

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
