import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from 'src/types/offers';
import { AppDispatch, State } from 'src/types/state';
import { APIRoute } from 'src/utils/const';
import { errorAction, loadingAction, offersAction } from './action';


export const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/offers',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadingAction(true));

      try {
        if (data) {
          dispatch(offersAction(data));
        } else {
          throw new Error('error message');
        }
      } catch (error) {
        const er = error instanceof Error ? error.message : error as string;
        dispatch(errorAction(er));
      } finally {
        dispatch(loadingAction(false));
      }
    },
  );
