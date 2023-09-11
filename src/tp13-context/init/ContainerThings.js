import {useState} from 'react';
import {ThingForm} from './ListOfThings';
import {ShowList} from './ShowList';

export function ContainerThings() {
  const [items, setItems] = useState([]);

  function addItemName(itemName) {
    setItems(items => ([...items, {id: items.length, name: itemName}]));
  }

  console.log('ITEMS', items);
  return (
    <>
      <ThingForm addItemName={addItemName}/>
      <ShowList items={items}/>
    </>
  );

}
