const { Sequelize , DataTypes }=require("sequelize")
require("dotenv").config

const sequelize=new Sequelize("resturantdb1","root","Subrat@123",{
    host: "localhost",
    dialect: "mysql"
})

module.exports={
    sequelize, DataTypes
}