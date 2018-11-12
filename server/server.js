const express = require ('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
// const {PORT} = process.env
const port = 5000
console.log('port =',process.env.PORT)

app.get('/api/checkfunction', (req, res)=>{res.send('that worked!').status(200)})


app.use(express.static(`${__dirname}/build`))
app.listen(port, () =>{ console.log(`Server listening on port ${port}`)})

