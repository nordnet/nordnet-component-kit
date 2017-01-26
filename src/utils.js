export function numberIsFinite(value) { // eslint-disable-line import/prefer-default-export
  return typeof value === 'number' && isFinite(value);
}
