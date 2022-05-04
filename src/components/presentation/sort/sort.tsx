import * as React from "react";

import Button from "../button/button";

const Sort = ():JSX.Element => {
  return(
    <article className="sort">
      <h2 className="sort__title">Сортировка</h2>
      <div className="sort__button">
        <Button color={'blue'} text={'по городу'}></Button>
      </div>
      <div className="sort__button">
        <Button color={'blue'} text={'по компании'}></Button>
      </div>
    </article>
  );
};

export default Sort;