import { NameSpace } from 'src/utils/const';
import { State } from 'src/types/state';
import { Review } from 'src/types/offers';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
export const getLoadedReviews = (state: State): boolean => state[NameSpace.Reviews].loadingReviews;
