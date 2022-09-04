import {createAction} from '@reduxjs/toolkit';
import { Offer, Review } from 'src/types/offers';
import { UserData } from 'src/types/user-data';
import { AuthorizationStatus } from 'src/utils/const';

export const offersAction = createAction<Offer[]>('data/offers');
export const offerAction = createAction<Offer>('data/offer');
export const favoritesAction = createAction<Offer[]>('data/favorites');
export const reviewsAction = createAction<Review[]>('data/reviews');

export const loadingAction = createAction<boolean>('data/loading');
export const errorAction = createAction<string | null>('data/error');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const userData = createAction<UserData>('user/data');

