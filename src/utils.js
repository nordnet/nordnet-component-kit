export function numberIsFinite(value) {
  return typeof value === 'number' && isFinite(value);
}

export function getTickDecimals(value, ticks) {
  if (!ticks || !value) {
    return undefined;
  }

  const tick = ticks.find(t => value >= t.from_price && value < (t.to_price + (t.tick || 0)));

  return tick ? tick.decimals : undefined;
}

export function getFractionDigits(...args) {
  return args.reduce((prev, curr) => {
    if (numberIsFinite(prev)) {
      return prev;
    }
    return curr;
  });
}
