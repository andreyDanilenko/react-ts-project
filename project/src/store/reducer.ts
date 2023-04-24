/* eslint-disable no-console */
import { createReducer } from '@reduxjs/toolkit';
import { errorAction, loadingOffersAction, loadingOfferAction, loadingNearbyOfferAction, nearbyOffersAction, offerAction, offersAction, requireAuthorization, userData, reviewsAction,
  loadingReviewsAction } from './action';
import { Offer, Review } from 'src/types/offers';
import { AuthorizationStatus } from 'src/utils/const';
import { UserData } from 'src/types/user-data';

type InitialState = {
  user: UserData | null
  offers: Offer[]
  nearbyOffers: Offer[]
  offer: Offer | null
  reviews: Review[]
  error: string | null
  loadingOffers: boolean
  loadingNearbyOffers: boolean
  loadingReviews: boolean
  loadingOffer: boolean
  authorizationStatus: AuthorizationStatus
}

const initialState: InitialState = {
  user: null,
  offers: [],
  nearbyOffers: [],
  offer: null,
  reviews: [],
  error: null,
  loadingOffers: true,
  loadingNearbyOffers: false,
  loadingReviews: false,
  loadingOffer: false,

  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(nearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(offerAction, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(reviewsAction, (state, action) => {
      console.log(action.payload);
      state.reviews = action.payload;
    })

    .addCase(loadingOffersAction, (state, action) => {
      state.loadingOffers = action.payload;
    })
    .addCase(loadingNearbyOfferAction, (state, action) => {
      state.loadingNearbyOffers = action.payload;
    })
    .addCase(loadingOfferAction, (state, action) => {
      state.loadingOffer = action.payload;
    })
    .addCase(loadingReviewsAction, (state, action) => {
      state.loadingReviews = action.payload;
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
