const app = require('./app');
const connectDB = require('./src/config/dbConfig');
require('dotenv').config()
const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=>{
    console.log(`🔥💣server running ${PORT}`)
    connectDB()
})