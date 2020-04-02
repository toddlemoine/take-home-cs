export const SAVE_SEQUENCE_DEFINITION = 'SAVE_SEQUENCE_DEFINITION';

export function saveSequenceDefinition(sequenceId, sequenceDefinition) {
  return {
    type: SAVE_SEQUENCE_DEFINITION,
    sequenceId,
    sequenceDefinition
  };
}
