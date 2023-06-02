import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'src/utils/const';
import { authSlice } from './auth-process/auth-process';
import { offerSlice } from './offer-process/offer-process';
import { reviewSlice } from './review-process/review-process';
import { userSlice } from './user-process/user-process';


export const rootReducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Offers]: offerSlice.reducer,
  [NameSpace.Reviews]: reviewSlice.reducer,
  [NameSpace.User]: userSlice.reducer
});
