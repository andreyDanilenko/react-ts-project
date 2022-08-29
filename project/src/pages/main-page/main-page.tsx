import { useState } from 'react';
import { Map, PlacesList, TabsList } from 'src/components';
import { Offer, Point } from 'src/types/offers';

const CITIES_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

type Props = {
  offers: Offer[];
};

const MainPage = (props: Props): JSX.Element => {
  const [selectedPoint] = useState<Point | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<string>('Amsterdam');
  const points = props.offers.map((offer) => ({title: offer.title, lat: offer.city.location.latitude, lng: offer.city.location.longitude }));
  const city = props.offers[0].city;


  const handleChangeCity = () => {
    // eslint-disable-next-line no-console
    console.log('sdsd');

  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabsList tabs={CITIES_LIST} selectedTab={selectedCity} onChangeTab={handleChangeCity}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{props.offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                    Popular
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                    Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlacesList offers={props.offers}/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={city} points={points} selectedPoint={selectedPoint}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainPage;
