import {createReducer} from '@reduxjs/toolkit';
import {offersAction} from './action';
import { Offer } from 'src/types/offers';


type InitialState = {
offers: Offer[]
}

const initialState: InitialState = {
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
