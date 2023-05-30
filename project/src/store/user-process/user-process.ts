import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'src/utils/const';
import { errorAction, userData } from '../action';
import { UserData } from 'src/types/user-data';


interface UserType {
    user: UserData | null
    error: string | null
}

const initialState = {
  user: null,
  error: null,
} as UserType ;

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(errorAction, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userData, (state, action) => {
        state.user = action.payload;
      });
  }
});
