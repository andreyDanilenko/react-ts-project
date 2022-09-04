import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from 'src/services/token';
import { AuthData } from 'src/types/auth-data';
import { Offer } from 'src/types/offers';
import { AppDispatch, State } from 'src/types/state';
import { UserData } from 'src/types/user-data';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from 'src/utils/const';
import { errorAction, loadingAction, offersAction, requireAuthorization, userData } from './action';
import {store} from './';


export const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/offers',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadingAction(true));

      try {
        if (data) {
          dispatch(offersAction(data));
        } else {
          throw new Error('error message');
        }
      } catch (error) {
        const er = error instanceof Error ? error.message : error as string;
        dispatch(errorAction(er));
      } finally {
        dispatch(loadingAction(false));
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
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
