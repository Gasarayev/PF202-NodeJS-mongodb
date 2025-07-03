require('dotenv').config()

module.exports={
    SERVER_PORT: process.env.PORT,
    DB_USERNAME: process.env.MONGO_DB_USERNAME,
    DB_PASS: process.env.MONGO_DB_PASS,
    DB_URI: process.env.MONGO_DB_URI,

}