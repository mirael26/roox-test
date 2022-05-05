import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { FormProperties, ProfileInputProperty, User } from "../../../type";

import UserProfile from "../../presentation/user-profile/user-profile";
import ProfileInput from "../../presentation/profile-input/profile-input";
import { ProfilePropertiesLabels, ProfileValidation } from "../../../const";

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
  };

  const onInputChange = (name: keyof FormProperties, value: string, isRequired: boolean): void => {
    let isValid = ProfileValidation[name].test(value);
    if (isRequired && value === '') {
      isValid = false;
    }
    const newState = Object.assign({}, inputData, {[name]: {value: value, isValid: isValid}});
    setInputData(newState);
  };

  const handleFormSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    let isFormValid = true;
    let formData: FormProperties | {} = {};
    Object.keys(inputData).forEach((key: keyof FormProperties) => {      
      formData = Object.assign({}, formData, {[key]: inputData[key].value});
      if (!inputData[key].isValid) {
        isFormValid = false;
      }
    })
    if (!isFormValid) {
      return;
    }
    console.log(JSON.stringify(formData));
  };

  let ProfileProperties: ProfileInputProperty[];
  Object.keys(ProfilePropertiesLabels)
    .forEach(property => {
      const isRequired = property === 'comment' ? false : true;
      const newProperty = {
        id: property,
        name: property,
        label: ProfilePropertiesLabels[property as keyof FormProperties],
        value: inputData[property].value,
        isValid: inputData[property].isValid,
        isRequired: isRequired,
        isReadonly: !isEditing,
      };
      ProfileProperties = ProfileProperties ? ProfileProperties : [];
      ProfileProperties.push(newProperty);
    });

  return (
    <UserProfile isEditing={isEditing} enableEditing={enableEditing} handleFormSubmit={handleFormSubmit}>      
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