import * as React from "react";

import { SortType } from "../../../type";

import Button from "../button/button";

interface SortProps {
  changeSortType(sortType: SortType): void;
}

const Sort = ({changeSortType}: SortProps):JSX.Element => {
  return(
    <article className="sort">
      <h2 className="sort__title">Сортировка</h2>
      <div className="sort__button">
        <Button color={'blue'} text={'по городу'} clickHandler={() => changeSortType('city')}></Button>
      </div>
      <div className="sort__button">
        <Button color={'blue'} text={'по компании'} clickHandler={() => changeSortType('company')}></Button>
      </div>
    </article>
  );
};

export default Sort;