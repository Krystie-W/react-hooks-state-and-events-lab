import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(false);
  
  function handleClick() {
    if (mode === true) {
      setMode(false)
    } else setMode(true)
  }

  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
