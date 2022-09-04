import {createReducer} from '@reduxjs/toolkit';
import {errorAction, loadingAction, offersAction, requireAuthorization, userData} from './action';
import { Offer } from 'src/types/offers';
import { AuthorizationStatus } from 'src/utils/const';
import { UserData } from 'src/types/user-data';

type InitialState = {
  user: UserData | null
  offers: Offer[]
  error: string | null
  loading: boolean
  authorizationStatus: AuthorizationStatus
}

const initialState: InitialState = {
  user: null,
  offers: [],
  error: null,
  loading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadingAction, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(errorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userData, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
