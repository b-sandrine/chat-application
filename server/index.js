const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

var app = express();

const PORT = process.env.PORT || 9000;

app.get('/', (req,res) => {
    res.send("Welcome to chat application backend")
})

app.listen(PORT, function(err, success) {
    if(err) {
        console.log(err.message)
    }

    console.log("http://localhost:"+PORT)
})