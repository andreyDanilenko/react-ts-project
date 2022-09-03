import {createAction} from '@reduxjs/toolkit';
import { Offer } from 'src/types/offers';
import { AppRoute, AuthorizationStatus } from 'src/utils/const';

export const offersAction = createAction<Offer[]>('data/offers');
export const loadingAction = createAction<boolean>('data/loading');
export const errorAction = createAction<string>('data/error');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

