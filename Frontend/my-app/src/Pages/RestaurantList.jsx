import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import RestaurantEditModal from "../components/RestaurantEditModal";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/res") // Adjust the URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleUpdateClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsEditModalOpen(true);
  };
  const updateRestaurant = (id, name, address, contactInfo) => {
    fetch("http://localhost:8080/res/update") // Adjust the URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error(error));
  };

  return (
    <Box p={4}>
      <Center>
        <h1>Restaurant List</h1>
      </Center>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Contact Info</Th>
            <Th>Update</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {restaurants?.map((restaurant) => (
            <Tr key={restaurant.id}>
              <Td>{restaurant.name}</Td>
              <Td>{restaurant.address}</Td>
              <Td>{restaurant.contactInfo || "N/A"}</Td>
              <Td>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => handleUpdateClick(restaurant)}
                >
                  Update
                </Button>
              </Td>
              <Td>
                <Button colorScheme="red" size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
     { isEditModalOpen?  <RestaurantEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        restaurant={selectedRestaurant}
        updateRestaurant={updateRestaurant}
      />: null}
    </Box>
  );
}

export default RestaurantList;
