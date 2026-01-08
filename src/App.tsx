import { useState } from 'react';
import { goodsFromServer, buttonClassesFields } from './data/data';
import { Buttons } from './components/buttons/Buttons';
import { List } from './components/list/List';
import 'bulma/css/bulma.css';
import './App.scss';
import { SortType } from './types/SortType';

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [isReversed, setReversed] = useState(false);

  const handleClick = (sortType: string) => {
    switch (sortType) {
      case SortType.SortAlphabetically:
      case SortType.SortByLength:
        setSortField(sortType);
        break;
      case SortType.Reverse:
        setReversed(!isReversed);
        break;
      case SortType.Reset:
        setSortField('');
        setReversed(false);
        break;
      default:
        break;
    }
  };

  type SortRevers = {
    sortField: string;
    isReversed: boolean;
  };

  function prepareGoods(
    initialGoods: string[],
    { sortField: field, isReversed: reversed }: SortRevers,
  ): string[] {
    const copyGgoods = [...initialGoods];

    copyGgoods.sort((goodA, goodB) => {
      switch (field) {
        case 'Sort alphabetically':
          return goodA.localeCompare(goodB);
        case 'Sort by length':
          return goodA.length - goodB.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      copyGgoods.reverse();
    }

    return copyGgoods;
  }

  const goods = prepareGoods(goodsFromServer, { sortField, isReversed });

  return (
    <div className="section content">
      <Buttons
        buttonClassesFields={buttonClassesFields}
        sortField={sortField}
        handleClick={handleClick}
        isReversed={isReversed}
      />
      <List goods={goods} />
    </div>
  );
};
