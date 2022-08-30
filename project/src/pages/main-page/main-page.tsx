/* eslint-disable no-console */
import { useMemo, useState } from 'react';
import { Map, PlacesList, TabsList } from 'src/components';
import { Offer, Point } from 'src/types/offers';
import { useAppSelector } from 'src/hooks';
import DefaultSelect from 'src/components/ui-kit/default-select/default-select';

const CITIES_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SELECTS_LIST = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];


type Props = {
  offers: Offer[];
};

const MainPage = (props: Props): JSX.Element => {
  const { loading, offers } = useAppSelector((state) => state.offersReducer);
  const [selectedPoint] = useState<Point | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState('Amsterdam');
  const [selectedSort, setSelectedSort] = useState('Popular');
  // eslint-disable-next-line no-console
  console.log(loading, offers);

  const { points, filteredOffers, city } = useMemo(() => {
    const filteredList = offers.filter((offer) => offer.city.name === selectedCity);

    return {
      filteredOffers: filteredList,
      points: filteredList.map((offer) => ({ title: offer.title, lat: offer.city.location.latitude, lng: offer.city.location.longitude })),
      city: filteredList[0]?.city ?? {}
    };
  }, [offers, selectedCity]);

  const sortedAndFilteredOffers = useMemo(() => {
    switch (selectedSort) {
      case 'Price: low to high':
        return filteredOffers.slice().sort((a, b) => (b.price < a.price) ? 1 : -1);
      case 'Price: high to low':
        return filteredOffers.slice().sort((a, b) => (b.price > a.price) ? 1 : -1);
      case 'Top rated first':
        return filteredOffers.slice().sort((a, b) => (b.rating > a.rating) ? 1 : -1);
    }

    return filteredOffers;
  }, [selectedSort, filteredOffers]);

  const handleChangeCity = (select: string) => {
    setSelectedCity(select);
  };

  const handleSelectedSort = (select: string) => {
    setSelectedSort(select);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabsList tabs={CITIES_LIST} selectedTab={selectedCity} onChangeTab={handleChangeCity} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{props.offers.length} places to stay in Amsterdam</b>
            <DefaultSelect selects={SELECTS_LIST} selectedSelect={selectedSort} onSelectedSort={handleSelectedSort}/>
            <div className="cities__places-list places__list tabs__content">
              <PlacesList offers={sortedAndFilteredOffers} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={city} points={points} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainPage;
