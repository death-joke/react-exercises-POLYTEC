import {useNavigate} from 'react-router-dom';

export function Edit({}) {
    const navigate = useNavigate();
    // YOUR JOB get the id from the url by using useParams
    // and set the id variable
    const id = 22; // replace this line with your code

    const toList = () => {
        // YOUR JOB: navigate to the list page
    };

    return (
      <div>
          <div>Editing Todo for id={id}</div>
          <button onClick={toList}>Nav to List</button>
      </div>
    );
}
