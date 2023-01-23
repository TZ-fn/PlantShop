import formatCurrency from 'utils/formatCurrency';

it('formats default/dollar amounts correctly', () => {
  expect(formatCurrency({ integer: 12, fraction: 12 })).toBe('$12.12');
  expect(formatCurrency({ integer: 123, fraction: 123 })).toBe('$124.23');
  expect(formatCurrency({ integer: 0, fraction: 15 })).toBe('$0.15');
  expect(formatCurrency({ integer: 12, fraction: 0 })).toBe('$12.00');

  expect(formatCurrency({ integer: 12, fraction: 12 }, undefined, 3)).toBe('$36.36');
});

it('formats PLN amounts correctly', () => {
  const locale = 'pl-PL';
  const currency = 'PLN';

  expect(formatCurrency({ integer: 12, fraction: 12, currency: currency }, locale)).toBe(
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'narrowSymbol',
    }).format(12.12),
  );

  expect(formatCurrency({ integer: 12, fraction: 12, currency: currency }, locale, 3)).toBe(
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'narrowSymbol',
    }).format(36.36),
  );
});
