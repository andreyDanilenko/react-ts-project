import { createSlice } from '@reduxjs/toolkit';
import { Review } from 'src/types/offers';
import { NameSpace } from 'src/utils/const';
import { loadingReviewsAction, reviewsAction } from '../action';


interface ReviewData {
  reviews: Review[]
  loadingReviews: boolean
}

const initialState = {
  reviews: [],
  loadingReviews: false,
} as ReviewData ;

export const reviewSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(reviewsAction, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(loadingReviewsAction, (state, action) => {
        state.loadingReviews = action.payload;
      });
  }
});
