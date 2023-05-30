import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from 'src/utils/const';
import { requireAuthorization } from '../action';


interface AuthData {
  authorizationStatus: AuthorizationStatus
}

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown
} as AuthData ;

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  }
});
