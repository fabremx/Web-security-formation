db = db.getSiblingDB('freshshop')
db.createCollection("products")
db.products.insert([{
  "_id": 1,
  "title": "Fachion Lorem ipsum dolor sit amet",
  "price": 40,
  "description": "Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur sagi...",
  "image": "img-pro-01.jpg"
},
{
  "_id": 2,
  "title": "Fachion Lorem ipsum dolor sit amet",
  "price": 35,
  "description": "Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur sagi...",
  "image": "img-pro-02.jpg"
},
{
  "_id": 3,
  "title": "Fachion Lorem ipsum dolor sit amet",
  "price": 12,
  "description": "Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur sagi...",
  "image": "img-pro-03.jpg"
}])