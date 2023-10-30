const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Restaurant = sequelize.define("resturants", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
},
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactInfo: {
    type: DataTypes.STRING,
  },
});
module.exports = {
  Restaurant,
};
