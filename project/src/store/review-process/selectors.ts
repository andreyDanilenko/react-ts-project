import { NameSpace } from 'src/utils/const';
import { State } from 'src/types/state';
import { Review } from 'src/types/offers';

export const getReview = (state: State): Review => state[NameSpace.Reviews].reviews;
export const getLoadedReview = (state: State): boolean => state[NameSpace.Reviews].loadingReviews;
