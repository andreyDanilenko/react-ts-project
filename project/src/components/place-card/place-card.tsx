import { Link } from 'react-router-dom';
import { Offer } from 'src/types/offers';
import { getUpperCase, getActiveClass } from 'src/utils/utils';
import PlaceCardMark from './place-card-mark';

type Props = {
  offer: Offer;
};

const PlaceCard = (props: Props): JSX.Element => {
  const { host, isFavorite, isPremium, price, rating, title, type, id } = props.offer;

  return (
    <article className="cities__card place-card">
      {isPremium && <PlaceCardMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`} aria-label={title}>
          <img className="place-card__image" src={host.avatarUrl} width="260" height="200" alt="Place image1" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${getActiveClass(isFavorite, 'place-card__bookmark-button')}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getUpperCase(type)}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
