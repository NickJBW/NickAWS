const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (request, resonse) => {
    response.send('Hello from my API!')
})

app.get('/kittens', (request, response) => {
    response.json({
        kittens: 3,
    })
})

app.get('/kittens/:id/kitten', (request, response) => {
    var id = request.params.id
    response.send(id)
    })

app.listen(PORT, () => {
    console.log(`Express server is running on port: ${PORT}`)
})

// npm install nodemon

// In package.json (Enter dev line)
// {
//   "name": "aws_training",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node server.js",
//     "dev": "nodemon server.js"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.19.2",
//     "nodemon": "^3.1.0"
//   }
// }

// In Terminal
// npm run dev