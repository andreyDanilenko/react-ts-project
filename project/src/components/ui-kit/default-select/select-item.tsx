import React from 'react';

type Props = {
    select: string
    selectedSelect?: string
    onSelectedSort?: (select: string) => void;
}

const SelectItem = (props: Props): JSX.Element => (
  <li
    onClick={() => props.onSelectedSort?.(props.select)}
    className={`places__option  ${props.select === props.selectedSelect ? 'places__option--active' : ''}`}
    tabIndex={0}
  >
    {props.select}
  </li>
);

export default SelectItem;
