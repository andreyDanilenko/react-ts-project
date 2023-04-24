import { createReducer } from '@reduxjs/toolkit';
import { errorAction, loadingOffersAction, loadingOfferAction, loadingNearbyOfferAction, nearbyOffersAction, offerAction, offersAction, requireAuthorization, reviewsAction, userData, } from './action';
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
