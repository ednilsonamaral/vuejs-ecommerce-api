const Mongoose = require('mongoose')

const dbName = 'mongodb://localhost/webschool-vuejs-ecommerce-api'

Mongoose.connect(dbName)
Mongoose.Promise = global.Promise
const db = Mongoose.connection

db.on('error', console.error.bind(console, 'Erro de conexão!'))

db.once('open', () => {
	console.log('Conexão com banco de dados realizada com sucesso!')
})

exports = db
