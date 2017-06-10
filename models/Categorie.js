const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const _schema = {
		name: { type: String, required: true, unique: true }
	, status: { type: Boolean, required: true }
	, created_at: Date
	, updated_at: Date
}

const CategorieSchema = new Schema(_schema)

const Model = Mongoose.model('Categorie', CategorieSchema)

module.exports = Model
