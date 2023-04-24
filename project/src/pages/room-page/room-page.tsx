/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormSubmit, ReviewList, Map, PlacesList, LoadingBlock } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getUpperCase } from 'src/utils/utils';
import { fetchOffer, fetchNearbyOffers, fetchReviews } from 'src/store/api-action';
import { Point } from 'src/types/offers';

const RoomPage = (): JSX.Element => {
  const { id } = useParams();
  const { offer, nearbyOffers, loadingOffer, loadingNearbyOffers, reviews, loadingReviews} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchReviews(id));
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

  const city = offer?.city;
  const point = {
    title: offer?.city.name,
    lat: offer?.city.location.latitude,
    lng: offer?.city.location.longitude
  } as Point;

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
                  <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  { offer?.host.name }
                </span>
                <span className="property__user-status">
                  Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  { offer?.description }
                </p>

              </div>
            </div>
            <section className="property__reviews reviews">
              { !loadingReviews && <ReviewList reviews={reviews} /> }
              <FormSubmit />
            </section>
          </div>
        </div>
        <section className="property__map map">
          {
            city && nearbyOffers && <Map city={city} offers={nearbyOffers} selectedPoint={point} />
          }

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
