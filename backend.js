const express = require('express');
require('colors');
const morgan = require('morgan');
const connectDB = require('./config/config')
const dotenv = require('dotenv');
const { bgMagenta } = require('colors');
const shopModel = require('./Models/shop')
const cors = require('cors');
const router = require('./Route/DataRoute')
const app = express();

//config
dotenv.config()

// console.log(process.env.MONGO_URI)

connectDB();

const port = process.env.PORT || 8080

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors()); 
 
//route
app.use('/', router);
app.use("/api", router);
app.use("/loginapi", router);
app.use("/deleteapi", router);


app.listen(port, ()=>{
    console.log(`server is running ${process.env.NODE_ENV} on port ${process.env.PORT}`.bgMagenta.white)
})