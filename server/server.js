const express = require ('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
app.use(express.static(`${__dirname}/../build`))
app.use(bodyParser.json())

app.use(cors())
app.options('*',cors())


// const {SERVER_PORT} = process.env
let {
    SERVER_PORT,
} = process.env




const server_port = 5000
console.log('port =', SERVER_PORT)
app.get('/api/checkfunction', (req, res)=>{res.send('that worked!').status(200)})
app.get('/api/store',(req,res)=>{
    res.send([abc,def,ghi,jkl])
})



app.listen(server_port, () =>{ console.log(`Server listening on port ${server_port}`)})

