import {createReducer} from '@reduxjs/toolkit';
import {errorAction, loadingAction, offerAction, offersAction, requireAuthorization, reviewsAction, userData} from './action';
import { Offer, Review } from 'src/types/offers';
import { AuthorizationStatus } from 'src/utils/const';
import { UserData } from 'src/types/user-data';

type InitialState = {
  user: UserData | null
  offers: Offer[]
  offer: Offer | null
  reviews: Review[]
  error: string | null
  loading: boolean
  authorizationStatus: AuthorizationStatus
}

const initialState: InitialState = {
  user: null,
  offers: [],
  offer: null,
  reviews: [],
  error: null,
  loading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(offerAction, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action);

      state.offer = action.payload;
    })
    .addCase(reviewsAction, (state, action) => {
      state.reviews = action.payload;
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
