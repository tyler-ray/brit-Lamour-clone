const express = require ('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
const {PORT} = process.env

app.get('/api/checkfunction', (req, res)=>{res.send('that worked!').status(200)})


app.listen(PORT, () =>{ console.log(`Server listening on port ${PORT}`)})

