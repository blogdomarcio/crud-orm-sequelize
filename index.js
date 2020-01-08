const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

const pessoas = require('./routes/pessoas')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas)

app.listen(port, () => console.log('CRUD Sequelize Listening'))