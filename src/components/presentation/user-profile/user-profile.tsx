import * as React from "react";
import Button from "../button/button";

interface UserProfileProps {
  children: React.ReactNode,
  isEditing: boolean,
  enableEditing(): void
}

const UserProfile = ({children, isEditing, enableEditing}: UserProfileProps): JSX.Element => {
  return (
    <div className="user-profile">
      <h1 className="user-profile__header">Профиль пользователя</h1>
      <div className="user-profile__edit-button">
        <Button color={'blue'} text={'Редактировать'} clickHandler={enableEditing} />
      </div>
      <form className="user-profile__form">
        <div className="user-profile__inputs-wrapper">
          {children}
        </div>
        
        <div className="user-profile__submit-button">
          <Button color={'green'} text={'Отправить'} disabled={isEditing ? false : true}/>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;