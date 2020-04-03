import { createSequence } from '../app/createSequence';
import { CONFIGURE_SEQUENCE } from '../actions/configureSequence';
import { SAVE_SEQUENCE_DEFINITION } from '../actions/saveSequenceDefinition';
import { CANCEL_SAVE_SEQUENCE_DEFINITION } from '../actions/cancelSaveSequenceDefinition';
import { saveToLocalstorage, getFromLocalstorage } from '../utils';

const STORAGE_KEY = 'SEQTABLE';

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

function getInitialState() {
  const persistedState = getFromLocalstorage(STORAGE_KEY);
  return persistedState || initialState;
}

function timestamp(state) {
  state.lastModified = Date.now();
  return state;
}

export const tables = function(state = getInitialState(), action) {
  let nextState;

  switch (action.type) {
    case CONFIGURE_SEQUENCE:
      nextState = { ...state, activeSequence: action.sequenceId };
      break;
    case SAVE_SEQUENCE_DEFINITION:
      const { sequenceId, sequenceDefinition }  = action;
      nextState = { ...state, activeSequence: null };
      nextState.sequenceDefinitions[sequenceId] = sequenceDefinition;
      nextState.sequences[sequenceId] = createSequence(sequenceDefinition);
      nextState = timestamp(nextState);
      break;
    case CANCEL_SAVE_SEQUENCE_DEFINITION:
      nextState = {...state, activeSequence: null }; 
      break;
    default:
      nextState = state;
      break;
  }
     
    saveToLocalstorage(STORAGE_KEY, nextState);
    return nextState;
}
