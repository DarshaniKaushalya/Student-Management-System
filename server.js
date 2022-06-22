const express = require('express');
const dotenv = require('dotenv'); //to get connection of congig.env
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));


//mongoDB connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs") //you can specify your tamplate in here ejs/html/pug

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


//load Routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log('Server is running on http://localhost:${PORT}') });