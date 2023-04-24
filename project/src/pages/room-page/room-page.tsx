/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormSubmit, ReviewList, Map, PlacesList, LoadingBlock } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getUpperCase } from 'src/utils/utils';
import { reviews } from 'src/mocks/comments';
import { fetchOffer, fetchNearbyOffers } from 'src/store/api-action';
import { Offer } from 'src/types/offers';

type Props = {
  offers: Offer[]
}

const RoomPage = (props: Props): JSX.Element => {
  const { id } = useParams();
  const { offer, nearbyOffers, loadingOffer, loadingNearbyOffers } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, []);


  const getImagePreviewItem = (image: string, i: number): JSX.Element =>
    (
      <div key={i} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo_studio" />
      </div>
    );

  const getSubjectItem = (subject: string, i: number): JSX.Element =>
    (
      <li key={i} className="property__inside-item">
        {subject}
      </li>
    );

  if (loadingOffer) {
    return <LoadingBlock />;
  }

  console.log('offer', offer);
  console.log('componentNearby', nearbyOffers);

  const city = props.offers[0].city;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              offer?.images.slice(0, 6).map((image, i) => getImagePreviewItem(image, i))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer?.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer?.title}
              </h1>
              <button className="property__bookmark-button  button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                {offer?.rating && <span style={{ width: `${offer?.rating / 5 * 100}%` }}></span>}
                <span className="visually-hidden">Rating</span>
              </div>
              {offer?.rating && <span className="property__rating-value rating__value">{offer?.rating}</span>}
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer?.type && getUpperCase(offer.type)}
              </li>
              <li className="property__feature property__feature--bedrooms">

                {offer?.bedrooms && `${offer.bedrooms} Bedrooms`}
              </li>
              <li className="property__feature property__feature--agdults">
                {offer?.maxAdults && `Max ${offer.maxAdults} adults`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;
                {offer?.price && offer.price}
              </b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  offer?.goods.slice(0, 6).map((subject, i) => getSubjectItem(subject, i))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  Angelina
                </span>
                <span className="property__user-status">
                  Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewList reviews={reviews} />
              <FormSubmit />
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={city} offers={props.offers} selectedPoint={undefined} />
        </section>
      </section>
      <div className="container">
        {loadingNearbyOffers ? <LoadingBlock /> :
          <section className="near-places places">
            <PlacesList offers={nearbyOffers} title="Other places in the neighbourhood" />
          </section>}
      </div>
    </main>
  );
};

export default RoomPage;
