import {createAction} from '@reduxjs/toolkit';
import { Offer } from 'src/types/offers';
import { UserData } from 'src/types/user-data';
import { AppRoute, AuthorizationStatus } from 'src/utils/const';

export const offersAction = createAction<Offer[]>('data/offers');
export const loadingAction = createAction<boolean>('data/loading');
export const errorAction = createAction<string | null>('data/error');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const userData = createAction<UserData>('user/data');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

