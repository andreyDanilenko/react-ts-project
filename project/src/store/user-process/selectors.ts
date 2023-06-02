import { NameSpace } from 'src/utils/const';
import { State } from 'src/types/state';
import { UserData } from 'src/types/user-data';

export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
export const getError = (state: State): string | null => state[NameSpace.User].error;
