import { system, name, lorem } from 'faker';
import { Review } from 'src/types/offers';
import { createId, getRandomInt } from './utils';

export const makeFakeArtistQuestions = (): Review => ({
  'comment': lorem.paragraph(),
  'date': 'Mon Jul 18 2022 14:49:24 GMT+0300 (Москва, стандартное время)',
  'id': createId(),
  'rating': getRandomInt(1, 5),
  'user': {
    'avatarUrl': system.filePath(),
    'id': Math.random(),
    'isPro':  !(Math.floor(Math.random())),
    'name': name.findName()
  }
} as Review);

const CARD_COUNT = 12;

export const reviews = new Array(CARD_COUNT).fill('').map(() => makeFakeArtistQuestions());
