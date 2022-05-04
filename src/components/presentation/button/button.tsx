import * as React from "react";

import { SortType } from "../../../type";

interface ButtonProps {
  color: 'blue' | 'green',
  text: string,
  type?: string,
  clickHandler?(): void
}

const Button = ({color, text, clickHandler}: ButtonProps):JSX.Element => {
  return(
    <button className={`button button--${color}`} onClick={clickHandler}>{text}</button>
  );
};

export default Button;