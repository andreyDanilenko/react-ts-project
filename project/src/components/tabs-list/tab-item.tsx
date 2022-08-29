import React from 'react';

type Props = {
    tab: string
    selectedTab?: string
    onChangeTab?: (city: string) => void;
}

const TabItem = ({ tab, selectedTab, onChangeTab }: Props): JSX.Element => (
  <li onClick={() => onChangeTab?.(tab)} className="locations__item">
    <div className={`locations__item-link tabs__item ${tab === selectedTab ? 'tabs__item--active' : ''}`} >
      <span>{tab}</span>
    </div>
  </li>
);

export default TabItem;
