const Hapi = require('hapi')
const server = new Hapi.Server()
const db = require('./config/db')
const Constants = require('./helpers/constants')

server.connection({
	host: process.env.HOST || '0.0.0.0',
	port: process.env.PORT || 3000,
	routes: { cors: true }
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
const CategorieRoutes = require('./routes/categorie')

server.route(ProductRoutes)
server.route(CategorieRoutes)

server.start((err) => {
	if (err) {
		throw err
	}

	console.log(`Servidor rodando em ${server.info.uri}`)
})
