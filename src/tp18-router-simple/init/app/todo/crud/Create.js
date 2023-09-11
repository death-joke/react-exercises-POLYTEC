import {useNavigate} from 'react-router-dom';

export function Create(props) {
    const navigate = useNavigate();

    const toList = () => {
        // YOUR JOB: navigate to the list page
    };

    return (
      <div>
          <div>Create page !</div>
          <button onClick={toList}>Nav to List</button>
      </div>
    );
}
