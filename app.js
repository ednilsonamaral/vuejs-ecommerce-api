const Hapi = require('hapi')
const server = new Hapi.Server()
const db = require('./config/db')
const Constants = require('./helpers/constants')

server.connection({
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 4000
})

server.route({
		method: 'GET'
	, path: `${Constants.URI}`
	, handler: (req, reply) => {
		reply({
				error: false
			, message: 'Hello, world!'
		}).code(200)
	}
})

const ProductRoutes = require('./routes/product')

server.route(ProductRoutes)

server.start((err) => {
	if (err) {
		throw err
	}

	console.log(`Servidor rodando em ${server.info.uri}`)
})
