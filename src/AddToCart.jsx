import React, { useState } from "react";
import FoodMenu from "./Foodmenu";
import Cart from "./Cart";

const AddToCart = () => {
  console.log("Item added:", FoodMenu);

  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === foodItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...foodItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <FoodMenu addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default AddToCart;
