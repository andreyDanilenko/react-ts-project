import {useState} from 'react';
import { PlaceCard, Map } from 'src/components';
import { Offer, Point } from 'src/types/offers';

type Props = {
  offers: Offer[];
};

export const POINTS: Point[] = [
  {
    title: 'Саундвью',
    lat: 40.816881,
    lng: -73.872768
  },
  {
    title: 'Ферри Поинт',
    lat: 40.814909,
    lng: -73.830682
  },
  {
    title: 'Бронкс',
    lat: 40.862413,
    lng: -73.879357
  },
  {
    title: 'Инвуд-Хилл',
    lat: 40.870817,
    lng: -73.927112
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182
  }
];

export const CITY = {
  location: {
    latitude: 40.877312,
    longitude: -73.807182,
    zoom: 10,
  },
  name: 'Saint-Petersburg',
};


const MainPage = (props: Props): JSX.Element => {
  const [selectedPoint] = useState<Point | undefined>(undefined);
  // eslint-disable-next-line no-console

  // eslint-disable-next-line no-console

  // const onListItemHover = (listItemName: string) => {
  //   const currentPoint = points.find((point) => point.title === listItemName);

  //   setSelectedPoint(currentPoint);
  // };


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="main.html">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="main.html">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="main.html">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a href="main.html" className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="main.html">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="main.html">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
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

              {
                props.offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)
              }

            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={CITY} points={POINTS} selectedPoint={selectedPoint}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainPage;
