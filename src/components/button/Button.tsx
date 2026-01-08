import React from 'react';

type Props = {
  className: string;
  isReversed: boolean;
  nameField: string;
  sortField: string;
  handleClick: (nameField: string) => void;
};

export const Button: React.FC<Props> = ({
  className,
  isReversed,
  nameField,
  sortField,
  handleClick,
}) => {
  let classNameButton;

  if (isReversed && nameField === 'Reverse') {
    classNameButton = className;
  } else {
    classNameButton =
      sortField === nameField ? className : `${className} is-light`;
  }

  return (
    <button
      type="button"
      className={classNameButton}
      onClick={() => handleClick(nameField)}
    >
      {nameField}
    </button>
  );
};
