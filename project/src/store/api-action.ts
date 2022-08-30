import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from 'src/types/offers';
import { AppDispatch, State } from 'src/types/state';
import { APIRoute } from 'src/utils/const';
import { offersAction } from './action';


export const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/offers',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(offersAction(data));
    },
  );
