import React from "react";
import { Route, Routes } from "react-router-dom";
import RestaurantList from "../Pages/RestaurantList";
import AddData from "../Pages/AddData";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/resturant" element={<RestaurantList />} />
        <Route path="/adddata" element={<AddData />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
