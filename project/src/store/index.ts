import {combineReducers, configureStore} from '@reduxjs/toolkit';
import offersReducer from './slices/offers-slice';


const rootReducer = combineReducers({
  offersReducer
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  });
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
