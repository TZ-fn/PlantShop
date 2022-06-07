export function formatCurrency(
  { integer, fraction, currency = 'USD' }: { integer: number; fraction: number; currency: string },
  locale: string = 'en-US',
) {
  const amount = integer + fraction * 0.01;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}
