import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ProfileProperty, User } from "../../../type";

import UserProfile from "../../presentation/user-profile/user-profile";
import ProfileInput from "../../presentation/profile-input/profile-input";

//TODO импортировать из конст
const ProfileValidation = {
  name: /^[a-zA-Zа-яА-Я ]*$/,
  userName: /^[a-zA-Zа-яА-Я ]*$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  street: /^[a-zA-Zа-яА-Я0-9 .,]*$/,
  city: /^[a-zA-Zа-яА-Я .,]*$/,
  zipcode: /^[a-zA-Z0-9-]*$/,
  phone: /^(((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10})$/,
  website: /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi,
  comment: /^[a-zA-Zа-яА-Я0-9 .,%&';=?$\x22]*$/,
};

const ProfilePropertiesLabels = {
  name: 'Name',
  userName: 'User name',
  email: 'E-mail',
  street: 'Street',
  city: 'City',
  zipcode: 'Zip code',
  phone: 'Phone',
  website: 'Website',
  comment: 'Comment',
};

interface InputDataState {
  [key: string]: {value: string, isValid: boolean}
}

const UserProfileContainer  = ():JSX.Element => {
  const location = useLocation();
  const {user} = location.state as {user: User};
  const [isEditing, setEditing] = useState<boolean>(false);
  const [inputData, setInputData] = useState<InputDataState>({
    name: {value: user.name, isValid: true},
    userName: {value: user.username, isValid: true},
    email: {value: user.email, isValid: true},
    street: {value: user.address.street, isValid: true},
    city: {value: user.address.city, isValid: true},
    zipcode: {value: user.address.zipcode, isValid: true},
    phone: {value: user.phone, isValid: true},
    website: {value: user.website, isValid: true},
    comment: {value: '', isValid: true},
  });


  const enableEditing = (): void => {
    setEditing(true)
  }

  const onInputChange = (name: keyof typeof ProfilePropertiesLabels, value: string, isRequired: boolean): void => {
    let isValid = ProfileValidation[name].test(value);
    if (isRequired && value === '') {
      isValid = false;
    }
    const newState = Object.assign({}, inputData, {[name]: {value: value, isValid: isValid}});
    setInputData(newState);
  }

  let ProfileProperties: ProfileProperty[];
  Object.keys(ProfilePropertiesLabels)
    .forEach(property => {
      const isRequired = property === 'comment' ? false : true;
      const newProperty = {
        id: property,
        name: property,
        label: ProfilePropertiesLabels[property as keyof typeof ProfilePropertiesLabels],
        value: inputData[property].value,
        isValid: inputData[property].isValid,
        isRequired: isRequired,
        isReadonly: !isEditing,
      };
      ProfileProperties = ProfileProperties ? ProfileProperties : [];
      ProfileProperties.push(newProperty);
    });

  return (
    <UserProfile isEditing={isEditing} enableEditing={enableEditing}>      
        {ProfileProperties
          ? ProfileProperties.map((property, i) => {
            return <ProfileInput key={`${i}-input`}
              data={property}
              onChange={onInputChange}
            />
          })
          : null}
    </UserProfile>
  );
};

export default UserProfileContainer;