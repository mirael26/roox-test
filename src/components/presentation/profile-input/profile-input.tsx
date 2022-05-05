import * as React from "react";
import { ProfileInputProperty } from "../../../type";

interface ProfileInputProps {
  data: ProfileInputProperty,
  onChange(name: string, value: string, isRequired: boolean): void
}

const ProfileInput = ({data, onChange}: ProfileInputProps):JSX.Element => {
  const {
    id,
    name,
    label,
    value,
    isValid,
    isRequired,
    isReadonly
  } = data;

  return (
    <div className="profile-input">
      <label className="profile-input__label" htmlFor={id}>{label}</label>
      {name === 'comment'
        ? <textarea className={`profile-input__input profile-input__input--textarea${isValid ? '' : ' profile-input__input--invalid'}`}
          id={id} 
          name={name}
          value={value}
          required={isRequired}
          readOnly={isReadonly}
          onChange={(evt) => onChange(name, evt.target.value, isRequired)}
          rows={4}
        />
        : <input className={`profile-input__input${isValid ? '' : ' profile-input__input--invalid'}`}
          id={id}
          name={name}
          value={value}
          required={isRequired}
          readOnly={isReadonly}
          onChange={(evt) => onChange(name, evt.target.value, isRequired)}
        />}
    </div>
  );
}

export default ProfileInput;