import * as React from "react";

import Sort from "../../presentation/sort/sort";
import UsersList from "../../presentation/users-list/users-list";
import UserProfileContainer from "../user-profile-container/user-profile-container";

interface UsersContainerProps {
  mode: 'list' | 'profile',
}

interface UsersContainerState {
  sort: 'city' | 'company',
}

class UsersContainer extends React.PureComponent<UsersContainerProps, UsersContainerState> {
  constructor(props: UsersContainerProps) {
    super(props);

    this.state = {
      sort: 'city'
    }
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