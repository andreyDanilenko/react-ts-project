import { NameSpace } from 'src/utils/const';
import { State } from 'src/types/state';
import { Offer } from 'src/types/offers';

export const getOffer = (state: State): Offer => state[NameSpace.Offers].offer;
export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;

export const getLoadedOffer = (state: State): boolean => state[NameSpace.Offers].loadingOffer;
export const getLoadedOffers = (state: State): boolean => state[NameSpace.Offers].loadingOffers;
export const getLoadedNearbyOffers = (state: State): boolean => state[NameSpace.Offers].loadingNearbyOffers;
