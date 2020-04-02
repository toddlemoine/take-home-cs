import { createSequence } from '../app/createSequence';
import { CONFIGURE_SEQUENCE } from '../actions/configureSequence';
import { SAVE_SEQUENCE_DEFINITION } from '../actions/saveSequenceDefinition';

const sequenceDefinitions = {
    red: { start: 8, end: 29, step: 1, switchAfter: 5, width: 20, direction: 'LTR' },
    green: { start: 231, end: 247, step: 1, switchAfter: 5, width: 30, direction: 'LTR' },
    blue: { start: 47, end: 81, step: 2, switchAfter: 5, width: 40, direction: 'RTL' }
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

function timestamp(state) {
  state.lastModified = Date.now();
  return state;
}

export const tables = function(state = initialState, action) {
  switch (action.type) {
    case CONFIGURE_SEQUENCE:
      return { ...state, activeSequence: action.sequenceId };
    case SAVE_SEQUENCE_DEFINITION:
      const { sequenceId, sequenceDefinition }  = action;
      const newState = { ...state, activeSequence: null };
      newState.sequenceDefinitions[sequenceId] = sequenceDefinition;
      newState.sequences[sequenceId] = createSequence(sequenceDefinition);
      return timestamp(newState);
    default:
      return state;
  }
}
