import React from 'react';
import TabItem from './tab-item';

type Props = {
    tabs: string[]
    selectedTab?: string
    onChangeTab?: (city: string) => any;
}

const TabsList = (props: Props) => {
  const {tabs, selectedTab, onChangeTab} = props;
  // eslint-disable-next-line indent, no-console
   console.log(tabs);

  return (
    <ul className="locations__list tabs__list">
      {tabs.map((tab)=> <TabItem tab={tab} key={tab} selectedTab={selectedTab} onChangeTab={onChangeTab} />)}
    </ul>
  );
};

export default TabsList;
