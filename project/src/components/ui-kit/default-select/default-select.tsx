import React, { useState } from 'react';
import SelectItem from './select-item';

type Props = {
   selects: Array<string>
   selectedSelect?: string
   onSelectedSort?: (select: string) => void;
}

const DefaultSelect = (props: Props): JSX.Element => {
  const [opened, setOpened] = useState(false);

  const handleOpenSelect = () => {
    setOpened(!opened);
  };


  return (
    <div onClick={handleOpenSelect} className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {props.selectedSelect}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={`places__options places__options--custom  ${ opened ? 'places__options--opened' : ''} `}>
        {
          props.selects.map((select) => <SelectItem key={select} select={select} selectedSelect={props.selectedSelect} onSelectedSort={props.onSelectedSort} />)
        }
      </ul>
    </div>
  );
};

export default DefaultSelect;
