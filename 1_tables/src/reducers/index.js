import { createSequence } from '../app/createSequence';

const initialState = {
  text: 'It works with state',
  sequences: [
    createSequence({ start: 8, end: 29, switchAfter: 5 }),
    createSequence({ start: 231, end: 247, switchAfter: 5 }),
    createSequence({ start: 47, end: 81, step: 2, switchAfter: 5 })
  ]
};

export const tables = function(state = initialState, action) {
  return state;
}
