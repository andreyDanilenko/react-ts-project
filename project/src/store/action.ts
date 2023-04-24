import {createAction} from '@reduxjs/toolkit';
import { Offer, Review } from 'src/types/offers';
import { UserData } from 'src/types/user-data';
import { AuthorizationStatus } from 'src/utils/const';

export const offersAction = createAction<Offer[]>('data/offers');
export const nearbyOffersAction = createAction<Offer[]>('data/nearbyOffers');
export const offerAction = createAction<Offer>('data/offer');
export const favoritesAction = createAction<Offer[]>('data/favorites');
export const reviewsAction = createAction<Review[]>('data/reviews');

export const loadingOffersAction = createAction<boolean>('data/loadingOffers');
export const loadingNearbyOfferAction = createAction<boolean>('data/nearbyOfferAction');
export const loadingOfferAction = createAction<boolean>('data/offerAction');
export const loadingFavoritesAction = createAction<boolean>('data/favoritesAction');
export const loadingReviewsAction = createAction<boolean>('data/reviewsAction');

export const errorAction = createAction<string | null>('data/error');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const userData = createAction<UserData>('user/data');

