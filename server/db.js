const mysql = require("mysql2/promise");
const { MongoClient } = require('mongodb');
const dbConfig = require("./db.config.js");

const connection = mysql.createPool({
  host: dbConfig.MYSQL_HOST,
  port: 3307,
  user: dbConfig.MYSQL_USER,
  password: dbConfig.MYSQL_PASSWORD,
  database: dbConfig.MYSQL_DB
});

// const urlmongo = `mongodb://${dbConfig.MONGODB_USER}:${dbConfig.MONGODB_PASSWORD}@${dbConfig.MONGODB_HOST}:27017`;
// const client = new MongoClient(urlmongo, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect()
//   .then(() => {
//     console.log("Successfully connected to mongodb database."); 
//   })
//   .catch((error) => {
//     throw error;
//   });

module.exports = {
  mysql: connection,
  // mongodb: client
};
