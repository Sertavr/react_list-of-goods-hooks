import React from 'react';
import { Button } from '../button/Button';

type Props = {
  buttonClassesFields: string[][];
  sortField: string;
  handleClick: (nameField: string) => void;
  isReversed: boolean;
};

export const Buttons: React.FC<Props> = ({
  buttonClassesFields,
  sortField,
  handleClick,
  isReversed,
}) => (
  <div className="buttons">
    {buttonClassesFields.map(([className, nameField]) => {
      if (!sortField && !isReversed && nameField === 'Reset') {
        return null;
      }

      return (
        <Button
          sortField={sortField}
          isReversed={isReversed}
          className={className}
          nameField={nameField}
          handleClick={handleClick}
          key={nameField}
        />
      );
    })}
  </div>
);
