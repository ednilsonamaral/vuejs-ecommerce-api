const CONSTANTS = require('../helpers/constants')
const URI = `${CONSTANTS.URI}/products`
const ProductModel = require(`../models/Product`)

const Moment = require('moment')
const getCurrentDateWithoutTimezone = Moment().format('YYYY-MM-DDTHH:mm:ss')

module.exports = [
	// Get all products
	{
		method: 'GET',
		path: URI,
		handler: (req, reply) => {
			ProductModel.find((error, data) => {
				if (error) {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					}).code(401)
				} else {
					reply({
						error: false,
						data: data,
						statusCode: 200,
						statusText: 'OK'
					}).code(200)
				}
			})
		}
	},

	// Get product by id
	{
		method: 'GET',
		path: URI + `/{id}`,
		handler: (req, reply) => {
			ProductModel.findById(req.params.id, (error, data) => {
				if (error) {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					}).code(401)
				} else {
					reply({
						error: false,
						data: data,
						statusCode: 200,
						statusText: 'OK'
					}).code(200)
				}
			})
		}
	},

	// Create a new product
	{
		method: 'POST',
		path: URI,
		handler: (request, reply) => {
			const product = new ProductModel({
					name: request.payload.name
				, price: request.payload.price
				, qtd: request.payload.qtd
				, status: request.payload.status
				, created_at: getCurrentDateWithoutTimezone
			})

			product.save((error, data) => {
				if (error) {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					}).code(401)
				} else {
					reply({
						error: false,
						data: data,
						message: 'Novo produto cadastrado com sucesso!',
						statusCode: 200,
						statusText: 'OK'
					}).code(200)
				}
			})
		}
	},

	// Update a product by id
	{
		method: 'PUT',
		path: URI + `/{id}`,
		handler: (request, reply) => {
			const _id = { _id: request.params.id }

			const product = {
					name: request.payload.name
				, price: request.payload.price
				, qtd: request.payload.qtd
				, status: request.payload.status
				, updated_at: getCurrentDateWithoutTimezone
			}

			ProductModel.update(_id, product, { multi: false }, (error, data) => {
				if (error) {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					}).code(401)
				} else {
					reply({
						error: false,
						data: data,
						message: 'Produto editado com sucesso!',
						statusCode: 200,
						statusText: 'OK'
					}).code(200)
				}
			})
		}
	},

	// Delete a product by id
	{
		method: 'DELETE',
		path: URI + `/{id}`,
		handler: (request, reply) => {
			const _id = { _id: request.params.id }

			ProductModel.remove(_id, (error, data) => {
				if (error) {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					}).code(401)
				} else {
					reply({
						error: false,
						data: data,
						message: 'Produto deletado com sucesso!',
						statusCode: 200,
						statusText: 'OK'
					}).code(200)
				}
			})
		}
	}
]
