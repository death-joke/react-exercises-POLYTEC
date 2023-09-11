/**
 * Starting Point.
 * Remove the dispaly of the list from the ListOfThings Component
 */
import { useState } from "react";

let c = 0;

export function ListOfThings(props) {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  function addItem(event) {
    event.preventDefault();
    setItems((items) => [...items, { id: items.length, name: itemName }]);
    setItemName("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setItemName(value);
  }

  return (
    <>
      {console.log(c++)}
      <form onSubmit={addItem} autoComplete="off">
        <input name="item" value={itemName} onChange={handleChange} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
