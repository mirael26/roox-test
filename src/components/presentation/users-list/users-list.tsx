import * as React from "react";
import { Link } from "react-router-dom";

import { User } from "../../../type";

interface UsersListProps {
  users: User[] | null,
  isLoading: boolean,
}

const UsersList = ({users, isLoading}: UsersListProps): JSX.Element => {
  const usersCount = users === null ? 0 : users.length;
  return (
    <div className="users-list">
      <h1 className="users-list__header">
        Список пользователей
      </h1>

      {isLoading
        ? <img className="users-list__throbber" src={require("./../../../img/throbber.gif")} alt="throbber"/>
        : <div className="users-list__wrapper">
          {users
            ? <ul className="users-list__list">
              {users.map((user, i) => {
                return <li key={`user-${i}`} className="users-list__item">
                  <div className="users-list__characteristic">
                    <span className="users-list__title">ФИО:</span>
                    <p className="users-list__text">{user.name}</p>
                  </div>
                  <div className="users-list__characteristic">
                    <span className="users-list__title">город:</span>
                    <p className="users-list__text">{user.address.city}</p>
                  </div>
                  <div className="users-list__characteristic">
                    <span className="users-list__title">компания:</span>
                    <p className="users-list__text">{user.company.name}</p>
                  </div>
                  <Link className="users-list__link" to="/profile" state={{ user: user }}>Подробнее</Link>
                </li>
              })}
            </ul>
            : null}
          <span className="users-list__count">Найдено {usersCount} пользователей</span>
        </div>
      }
    </div>
  );
};

export default UsersList;