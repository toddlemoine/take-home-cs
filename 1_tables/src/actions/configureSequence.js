export const CONFIGURE_SEQUENCE = 'CONFIGURE_SEQUENCE';

export function configureSequence(sequenceId) {
  return {
    type: CONFIGURE_SEQUENCE,
    sequenceId
  };
}
