db = db.getSiblingDB("footshop");
db.createCollection("products");
db.products.insert([
  {
    _id: 1,
    title: "Sneaker Puma RS-X3",
    price: 80.99,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    image: "https://i.ibb.co/xYcSffS/867d09dcc622e637719811f163fdc19f.webp",
  },
  {
    _id: 2,
    title: "Onitsuka Mexico 66",
    price: 65.25,
    description:
      "Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur.",
    image: "https://i.ibb.co/qdQCFBH/4117367-500-A.jpg",
  },
  {
    _id: 3,
    title: "Richelieu Oxford cuir noir",
    price: 120.12,
    description:
      "Pellentesque eget lectus sit amet magna rutrum tincidunt id ut nisi.",
    image: "https://i.ibb.co/34xZsSg/richelieu-oxford-cuir-noir-1-800x800.jpg",
  },
  {
    _id: 4,
    title: "Converse Chuck Taylor",
    price: 84.99,
    description: "Vivamus eleifend felis urna, sed eleifend lectus iaculis et.",
    image: "https://i.ibb.co/5k22p82/4f79bf40f5747d70e59aebbcf61b3ce9.webp",
  },
  {
    _id: 5,
    title: "Nike Air Force 1",
    price: 70.12,
    description: "Praesent id libero vitae dui commodo faucibus sed id neque.",
    image: "https://i.ibb.co/qWYVdMJ/41ad9b32a2dc5b15709bf79597e43ae7.webp",
  },
  {
    _id: 6,
    title: "Vans sk8 hi",
    price: 74.0,
    description:
      "Fusce vitae tempor mi. Aliquam lobortis semper sem in consequat.",
    image: "https://i.ibb.co/t8jRDpW/0000206955029-01-pa.jpg",
  },
  {
    _id: 7,
    title: "Timberland Basket",
    price: 66.99,
    description:
      "Phasellus suscipit nisl sed felis tempus, quis bibendum orci accumsan.",
    image: "https://i.ibb.co/pZPSPcM/d1c80f83062afcea9129a3c3ed84d4ea.webp",
  },
  {
    _id: 8,
    title: "So Kate",
    price: 110.25,
    description: "Morbi mattis ornare purus, vel tincidunt tellus porta id.",
    image:
      "https://i.ibb.co/Xk18cqQ/3130694bk01-3130694bk01-main-image-ecommerce-christianlouboutin-sokate-3130694-bk01-1-1200x1200.jpg",
  },
]);
db.createCollection("reviews");
db.reviews.insert([
  {
    _id: 1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 1,
  },
  {
    _id: 2,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 1,
  },
  {
    _id: 3,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 1,
  },
  {
    _id: 4,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 2,
  },
  {
    _id: 5,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 2,
  },
  {
    _id: 6,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 3,
  },
  {
    _id: 7,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 4,
  },
  {
    _id: 8,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 4,
  },
  {
    _id: 9,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 4,
  },
  {
    _id: 10,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 4,
  },
  {
    _id: 11,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 5,
  },
  {
    _id: 12,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 5,
  },
  {
    _id: 13,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 6,
  },
  {
    _id: 14,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 6,
  },
  {
    _id: 15,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 7,
  },
  {
    _id: 16,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 8,
  },
  {
    _id: 17,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 8,
  },
  {
    _id: 18,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.",
    productId: 8,
  },
]);
db.createCollection("orders");
