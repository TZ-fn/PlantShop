export function formatCurrency(
  { integer, fraction, currency = 'USD' }: { integer: number; fraction: number; currency?: string },
  locale: string = 'en-US',
  count: number = 1,
) {
  const amount = (integer + fraction * 0.01) * count;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}
