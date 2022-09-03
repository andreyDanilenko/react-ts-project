import {createReducer} from '@reduxjs/toolkit';
import {errorAction, loadingAction, offersAction} from './action';
import { Offer } from 'src/types/offers';


type InitialState = {
  offers: Offer[]
  error: string
  loading: boolean
}

const initialState: InitialState = {
  offers: [],
  error: '',
  loading: false,
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
    });
});

export {reducer};
