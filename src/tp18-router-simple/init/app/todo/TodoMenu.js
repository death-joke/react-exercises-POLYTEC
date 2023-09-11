import {NavLink} from 'react-router-dom';

export function TodoMenu() {
    return (
      <div>
          <NavLink
            to="/"
            className={({isActive, isPending}) => (isActive ? 'button button-outline' : 'button')}
          >
              Home
          </NavLink>
          {/*YOUR JOB: add a NavLink to the /todo page*/}
          {/*YOUR JOB: add a NavLink to the /todo/create  page*/}
          {/*YOUR JOB: add a NavLink to the /todo/list  page*/}
          {/*YOUR JOB: add a Link to the /todo/edit/122  page*/}

      </div>
    );
}
