const mysql = require("mysql");
const { MongoClient } = require('mongodb');
const dbConfig = require("./db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.MYSQL_HOST,
  user: dbConfig.MYSQL_USER,
  password: dbConfig.MYSQL_PASSWORD,
  database: dbConfig.MYSQL_DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to mysql database.");
});

const urlmongo = `mongodb+srv://${dbConfig.MONGODB_USER}:${dbConfig.MONGODB_PASSWORD}@cluster0.3ekbm.mongodb.net/${dbConfig.MONGODB_DB}?retryWrites=true&w=majority`;
const client = new MongoClient(urlmongo, { useUnifiedTopology: true });

try {
  client.connect().then(() => {
    console.log("Successfully connected to mongodb database."); 
  })
} catch (e) {
  console.error(e);
} finally {
  client.close();
}

module.exports = {
  mysql: connection,
  mongodb: client
};
