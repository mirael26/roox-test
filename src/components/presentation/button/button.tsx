import * as React from "react";

interface ButtonProps {
  color: 'blue' | 'green',
  text: string,
}

const Button = ({color, text}: ButtonProps):JSX.Element => {
  return(
    <button className={`button button--${color}`}>{text}</button>
  );
};

export default Button;