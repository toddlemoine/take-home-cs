export const CONFIGURE_SEQUENCE = 'CONFIGURE_SEQUENCE';

export function configureSequence(index) {
  return {
    type: CONFIGURE_SEQUENCE,
    index
  };
}
