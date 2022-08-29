import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {offers} from 'src/mocks/offers';

const initialState = {
  offers: offers,
  loading: false,
  error: ''
};


export const offersSlice = createSlice({
  name: 'offersSlice',
  initialState,
  reducers: {
    offersFetching(state) {
      state.loading = true;
    },
    offersFetchingSuccess(state, action) {
      state.loading = false;
      state.error = '';
      state.offers = action.payload;
    },
    offersFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export default offersSlice.reducer;
