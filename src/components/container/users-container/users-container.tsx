import * as React from "react";

import { User } from "../../../type";
import { getUsers } from "../../../api";

import Sort from "../../presentation/sort/sort";
import UsersList from "../../presentation/users-list/users-list";
import UserProfileContainer from "../user-profile-container/user-profile-container";

interface UsersContainerProps {
  mode: 'list' | 'profile',
}

interface UsersContainerState {
  sort: 'city' | 'company',
  users: User[] | null,
}

class UsersContainer extends React.PureComponent<UsersContainerProps, UsersContainerState> {
  constructor(props: UsersContainerProps) {
    super(props);

    this.state = {
      sort: 'city',
      users: null
    }
  }

  async componentDidMount(): Promise<void> {
    await getUsers()
      .then((data) => {
        this.setState({users: data as User[]});
      });
    // TODO: сообщение об ошибке загрузки данных
  }

  render():JSX.Element {
    const {mode} = this.props;
    return (
      <div>
        <Sort></Sort>
        {mode === 'list'
          ? <UsersList />
          : null
        }
        {mode === 'profile'
          ? <UserProfileContainer />
          : null
        }
      </div>
    );
  }
};

export default UsersContainer;