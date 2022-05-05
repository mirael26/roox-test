import * as React from "react";

import { SortType, User } from "../../../type";
import { getUsers } from "../../../api";
import { sortByCity, sortByCompany, sortByName } from "../../../utils";

import Container from "../../presentation/container/container";
import Sort from "../../presentation/sort/sort";
import UsersList from "../../presentation/users-list/users-list";
import UserProfileContainer from "../user-profile-container/user-profile-container";

interface UsersContainerProps {
  mode: 'list' | 'profile'
}

interface UsersContainerState {
  sort: SortType,
  users: User[] | null,
  isLoading: boolean
}

class UsersContainer extends React.PureComponent<UsersContainerProps, UsersContainerState> {
  constructor(props: UsersContainerProps) {
    super(props);

    this.state = {
      sort: 'city',
      users: null,
      isLoading: true,
    }

    this.changeSortType = this.changeSortType.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await getUsers()
      .then((data) => {
        this.setState({users: data as User[], isLoading: false});
      });
  }

  changeSortType(sortType: SortType): void {
    this.setState({sort: sortType})
  }

  sortUsers(users: User[]): User[] {
    const {sort} = this.state;
    const usersSortedByName = users.slice().sort(sortByName);
    if (sort === 'city') {
      return usersSortedByName.sort(sortByCity);
    }
    if (sort === 'company') {
      return usersSortedByName.sort(sortByCompany);
    }
  }

  render():JSX.Element {
    const {mode} = this.props;
    const {users, isLoading} = this.state;
    const sortedUsers = users ? this.sortUsers(users) : null;
    return (
      <Container>
        <Sort changeSortType={this.changeSortType}></Sort>
        {mode === 'list'
          ? <UsersList users={sortedUsers} isLoading={isLoading}/>
          : null
        }
        {mode === 'profile'
          ? <UserProfileContainer />
          : null
        }
      </Container>
    );
  }
};

export default UsersContainer;