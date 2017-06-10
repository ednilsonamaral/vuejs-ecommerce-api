const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const _schema = {
		name: { type: String, required: true, unique: true }
	, id_categorie: { type: Schema.Types.ObjectId, required: true, ref: 'Categorie' }
	, price: { type: Number, required: true }
	, qtd: { type: Number, min: 0, max: 999 }
	, status: { type: Boolean, required: true }
	, created_at: Date
	, updated_at: Date
}

const ProductSchema = new Schema(_schema)

const Model = Mongoose.model('Product', ProductSchema);

module.exports = Model
