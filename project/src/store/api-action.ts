/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosError } from 'axios';
import { dropToken, saveToken } from 'src/services/token';
import { AuthData } from 'src/types/auth-data';
import { Offer } from 'src/types/offers';
import { AppDispatch, State } from 'src/types/state';
import { UserData } from 'src/types/user-data';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from 'src/utils/const';
import { errorAction,
  loadingOffersAction,
  loadingOfferAction,
  offerAction, offersAction,
  requireAuthorization, userData,
  nearbyOffersAction,
  loadingNearbyOfferAction
} from './action';
import {store} from './';

export const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/offers',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(loadingOffersAction(true));

      try {
        const {data} = await api.get<Offer[]>(APIRoute.Offers);
        dispatch(offersAction(data));
      } catch (error) {
        const er = error instanceof Error ? error.message : error as string;
        dispatch(errorAction(er));
      } finally {
        dispatch(loadingOffersAction(false));
      }
    },
  );

export const fetchNearbyOffers = createAsyncThunk<void | Offer | AxiosError,
  string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/nearbyOffers',
    async (id, {dispatch, extra: api}) => {
      const requestOffer = `${APIRoute.Offers}/${id}/nearby`;

      dispatch(loadingNearbyOfferAction(true));

      try {
        const {data} = await api.get<Offer[]>(requestOffer);
        console.log(data);
        dispatch(nearbyOffersAction(data));

      } catch (error) {
        const er = error instanceof Error ? error.message : error as string;
        dispatch(errorAction(er));
      } finally {
        dispatch(loadingNearbyOfferAction(false));
      }
    },
  );

export const fetchOffer = createAsyncThunk<void | Offer | AxiosError,
string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/offer',
    async (id, { dispatch, extra: api }) => {
      const requestOffer = `${APIRoute.Offers}/${id}`;
      dispatch(loadingOfferAction(true));


      try {
        const { data } = await api.get<Offer>(requestOffer);
        if (data) {
          dispatch(offerAction(data));
          dispatch(loadingOfferAction(false));
        } else {
          throw new Error('error message');
        }

      } catch (error) {
        const er = error instanceof Error ? error.message : error as string;
        dispatch(errorAction(er));
        dispatch(loadingOfferAction(false));
      }
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {

      try {
        const {data} = await api.get<UserData>(APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(userData(data));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login , {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(userData(data));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
  );

export const clearErrorAction = createAsyncThunk(
  'data/error',
  () => {
    setTimeout(
      () => store.dispatch(errorAction(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
