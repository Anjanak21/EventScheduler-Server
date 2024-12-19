const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const connectDb = require("./config/db")
const eventroute = require("./route/eventroute")
const sessionRoute = require('./route/sessionroute');
// const speakerRoute=require('./route/speakerroute');
const cors=require("cors")

const PORT = process.env.PORT || 5000
connectDb();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")
app.use("/events", eventroute)
app.use("/session",sessionRoute)
// app.use("/speaker",speakerRoute);

app.listen(PORT,() =>{
    console.log('server is running on port 3000');
    
})