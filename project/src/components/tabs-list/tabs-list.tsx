import React from 'react';
import TabItem from './tab-item';

type Props = {
    tabs: string[]
    selectedTab?: string
    onChangeTab?: (city: string) => void;
}

const TabsList = (props: Props) => {
  const {tabs, selectedTab, onChangeTab} = props;

  return (
    <ul className="locations__list tabs__list">
      {tabs.map((tab)=> <TabItem tab={tab} key={tab} selectedTab={selectedTab} onChangeTab={onChangeTab} />)}
    </ul>
  );
};

export default TabsList;
