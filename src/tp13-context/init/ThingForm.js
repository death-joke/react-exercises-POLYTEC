/**
 * Starting Point.
 * Remove the dispaly of the list from the ListOfThings Component
 */
import {useState} from 'react';
import PropTypes from 'prop-types';

let c = 0;

export function ThingForm(props) {

  const [itemName, setItemName] = useState('');

  const {addItemName} = props;

  function addItem(event) {
    event.preventDefault();
    addItemName(itemName);
    setItemName('');
  }


  function handleChange(e) {
    const value = e.target.value;
    setItemName(value);
  }

  return (
    <>
      {console.log(c++)}
      <form onSubmit={addItem} autoComplete="off">
        <input name="item"
               value={itemName}
               onChange={handleChange}
        />
      </form>
    </>
  );
}

ThingForm.propTypes = {
  addItemName: PropTypes.func
};
