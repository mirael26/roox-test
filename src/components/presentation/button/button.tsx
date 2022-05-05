import * as React from "react";

interface ButtonProps {
  color: 'blue' | 'green',
  text: string,
  type?: string,
  clickHandler?(): void,
  disabled?: boolean
}

const Button = ({color, text, clickHandler, disabled}: ButtonProps):JSX.Element => {
  return(
    <button
      className={`button button--${color}`}
      onClick={clickHandler}
      disabled={disabled}>{text}
    </button>
  );
};

export default Button;