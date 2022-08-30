import {createAction} from '@reduxjs/toolkit';
import { Offer } from 'src/types/offers';

export const offersAction = createAction<Offer[]>('data/offers');
