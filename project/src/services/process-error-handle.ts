import {store} from '../store';
import {errorAction} from '../store/action';
import {clearErrorAction} from '../store/api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(errorAction(message));
  store.dispatch(clearErrorAction());
};
