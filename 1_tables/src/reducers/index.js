import { createSequence } from '../app/createSequence';
import { CONFIGURE_SEQUENCE } from '../actions/configureSequence';
import { SAVE_SEQUENCE_DEFINITION } from '../actions/saveSequenceDefinition';

const sequenceDefinitions = {
    red: { start: 8, end: 29, switchAfter: 5 },
    green: { start: 231, end: 247, switchAfter: 5 },
    blue: { start: 47, end: 81, step: 2, switchAfter: 5 }
  };

const sequences = Object.entries(sequenceDefinitions)
  .reduce((acc, [id, seqDef]) => {
    acc[id] = createSequence(seqDef);  
    return acc;
  }, {});

const initialState = {
  sequenceDefinitions,
  sequences,
  activeSequence: null
};

export const tables = function(state = initialState, action) {
  switch (action.type) {
    case CONFIGURE_SEQUENCE:
      return { ...state, activeSequence: action.sequenceId };
    default:
      return state;
  }
}
