import { createSequence } from '../app/createSequence';

const initialSequenceDefinitions = [
  { start: 8, end: 29, switchAfter: 5 },
  { start: 231, end: 247, switchAfter: 5 },
  { start: 47, end: 81, step: 2, switchAfter: 5 }
];

const initialState = {
  text: 'It works with state',
  sequenceDefinitions: initialSequenceDefinitions.slice(0),
  sequences: initialSequenceDefinitions.map(def => createSequence(def))
};

export const tables = function(state = initialState, action) {
  return state;
}
