const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const PORT = process.env.PORT || 9000;

var app = express();

// CORS and HTTP allows data transfer btn the client and server domains

const http = require('http').Server(app)
// app.use(cors())

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:5173/"
    }
})

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)
    socket.on('disconnect',() => {
        console.log('🔥: A user disconnected')
    })
})

app.get('/', (req,res) => {
    res.send("Welcome to chat application backend")
})

http.listen(PORT, function(err, success) {
    if(err) {
        console.log(err.message)
    }

    console.log("http://localhost:"+PORT)
})