import {createAction} from '@reduxjs/toolkit';
import { Offer } from 'src/types/offers';

export const offersAction = createAction<Offer[]>('data/offers');
export const loadingAction = createAction<boolean>('data/loading');
export const errorAction = createAction<string>('data/error');
