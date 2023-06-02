import { NameSpace } from 'src/utils/const';
import { State } from 'src/types/state';
import { AuthorizationStatus } from 'src/utils/const';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.Auth].authorizationStatus;
