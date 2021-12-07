import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  function addToCart () {
    setCart(true);
  }

  return (
    <li className={(cart ? "in-cart" : "")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cart ? "Added" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
