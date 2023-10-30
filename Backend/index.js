const express = require("express");
const { sequelize } = require("./config/db")
const cors=require('cors');
const { resturantRouter } = require("./routes/ResturantRouter");
const app = express();
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use("/res",resturantRouter)
app.listen(8080, async ()=>{
    try {
        await sequelize.authenticate()
        console.log("Connected to DB")
        
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running at 8080")
})