# API desenvolvida para o curso de Vue.js 2 na Prática da Webschool

## URI

[https://vuejs-ecommerce-api.herokuapp.com/api/v1](https://vuejs-ecommerce-api.herokuapp.com)


## Categorie

- GET: `/api/v1/categories`  
- GET: `/api/v1/categories/{id}`  
- POST: `/api/v1/categories`  
- PUT: `/api/v1/categories/{id}`  
- DELETE: `/api/v1/categories/{id}`


### Schema

```js  
{
		name: { type: String, required: true, unique: true }
	, status: { type: Boolean, required: true }
	, created_at: Date
	, updated_at: Date
}
```


## Product

- GET: `/api/v1/products`  
- GET: `/api/v1/products/{id}`  
- POST: `/api/v1/products`  
- PUT: `/api/v1/products/{id}`  
- DELETE: `/api/v1/products/{id}`


### Schema

```js  
{
		name: { type: String, required: true, unique: true }
	, id_categorie: { type: Schema.Types.ObjectId, required: true, ref: 'Categorie' }
	, price: { type: Number, required: true }
	, qtd: { type: Number, min: 0, max: 999 }
	, status: { type: Boolean, required: true }
	, created_at: Date
	, updated_at: Date
}
```
