const express = require("express");
const { Restaurant } = require("../model/ResturantModel");
const resturantRouter = express.Router();
const mysql = require("mysql");
resturantRouter.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
resturantRouter.patch("/update",async (req,res)=>{
  let {name,address,contactInfo,id}=req.body
  console.log(name,address,contactInfo)
  try {
      await Restaurant.update({name:name,address:address,contactInfo:contactInfo},{
          where:{
             id
          }
      })
    res.send("Data Updated Sucessfully")
      
  } catch (error) {
      console.log(error)
  }
})
resturantRouter.delete("/delete/:id", async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    await Restaurant.destroy({
      where: {
        id: restaurantId,
      },
    });

    res.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = {
  resturantRouter,
};
