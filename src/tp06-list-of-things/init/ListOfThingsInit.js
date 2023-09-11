let c = 0;

/**
 * You can use the following data model for item this exercise:
 * {id: items.length, name: itemName}
 */
export function ListOfThingsOnSubmit() {
    console.log(c++);
    // const [items, setItems] = useState([]);
    // const [itemName, setItemName] = useState('');


    // function addItem(event) {
    //     event.preventDefault();
    // // to COMPLETE
    // }


    // function handleChange(e) {
    //     // const value = e.target.value;
    //     // to COMPLETE
    // }

    return (
      <>
          <form onSubmit={addItem} autoComplete="off">
              <input name="item"
                     value={itemName}
                     onChange={handleChange}
              />
          </form>
          <ul>
              {/*complete the code HERE to show all items*/}
          </ul>
      </>
    );
}
