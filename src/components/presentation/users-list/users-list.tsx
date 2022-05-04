import * as React from "react";
import { Link } from "react-router-dom";

import { User } from "../../../type";

interface UsersListProps {
  users: User[] | null;
}

const UsersList = ({users}: UsersListProps): JSX.Element => {
  return (
    <div className="users-list">
      <h1 className="users-list__header">
        Список пользователей
      </h1>
      {users
        ? <ul className="users-list__list">
          {users.map((user, i) => {
            return <li key={`user-${i}`} className="users-list__item">
              <div className="users-list__characteristic">
                <span className="users-list__title">ФИО:</span>
                <p className="users-list__text">{user.name}</p>
                <Link className="users-list__link" to="/profile" state={{ user: user}}>Подробнее</Link>
              </div>
              <div className="users-list__characteristic">
                <span className="users-list__title">город:</span>
                <p className="users-list__text">{user.address.city}</p>
              </div>
              <div className="users-list__characteristic">
                <span className="users-list__title">компания:</span>
                <p className="users-list__text">{user.company.name}</p>
              </div>
            </li>
          })}
        </ul>
        : null
      }      
    </div>
  );
};

export default UsersList;