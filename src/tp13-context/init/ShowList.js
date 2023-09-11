import PropTypes from 'prop-types';

/**
 * Staring point : your work is to make it work!
 */
export function ShowList(props) {

  const {items} = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

ShowList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
};
