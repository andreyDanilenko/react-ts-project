import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'src/utils/const';
import { loadingOffersAction, loadingOfferAction, loadingNearbyOfferAction, nearbyOffersAction, offerAction, offersAction } from '../action';
import { Offer } from 'src/types/offers';


interface OfferData {
    offers: Offer[],
    nearbyOffers: Offer[],
    offer: Offer | null,
    loadingOffers: boolean,
    loadingNearbyOffers: boolean,
    loadingOffer: boolean,
}

const initialState = {
  offers: [],
  nearbyOffers: [],
  offer: null,
  loadingOffers: true,
  loadingNearbyOffers: false,
  loadingOffer: false,
} as OfferData ;

export const offerSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(loadingOffersAction, (state, action) => {
        state.loadingOffers = action.payload;
      })
      .addCase(offersAction, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(loadingOfferAction, (state, action) => {
        state.loadingOffer = action.payload;
      })
      .addCase(offerAction, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadingNearbyOfferAction, (state, action) => {
        state.loadingNearbyOffers = action.payload;
      })
      .addCase(nearbyOffersAction, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
