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


### Exemplo de Envio

```js  
{
	"name": "Nome da categoria",
	"status" 1
}
```


#### Os campos `created_at` e `updated_at` são preenchidos automaticamente pela API.


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


### Exemplo de Envio

```js  
{
	"name": "Nome do produto",
	"id_categorie": "pega o id da categoria e cola aqui",
	"price": 10.99,
	"qtd": 10,
	"status" 1
}
```


#### Os campos `created_at` e `updated_at` são preenchidos automaticamente pela API.
