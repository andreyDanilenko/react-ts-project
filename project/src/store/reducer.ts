import {createReducer} from '@reduxjs/toolkit';
import {errorAction, loadingAction, offersAction, requireAuthorization} from './action';
import { Offer } from 'src/types/offers';
import { AuthorizationStatus } from 'src/utils/const';

type InitialState = {
  offers: Offer[]
  error: string | null,
  loading: boolean
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  offers: [],
  error: null,
  loading: false,
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
    });
});

export {reducer};
