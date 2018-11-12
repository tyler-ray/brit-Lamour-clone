const express = require ('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
// const {SERVER_PORT} = process.env
const server_port = 5000
console.log('port =',process.env.SERVER_PORT)
app.get('/api/checkfunction', (req, res)=>{res.send('that worked!').status(200)})



app.use(express.static(`${__dirname}/build`))
app.listen(server_port, () =>{ console.log(`Server listening on port ${server_port}`)})

