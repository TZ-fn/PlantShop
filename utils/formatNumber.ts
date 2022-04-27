export function formatCurrency(
  amount: number | string,
  locale: string = 'en-US',
  currencyType: string = 'USD',
) {
  if (typeof amount === 'string') {
    amount = Number(amount);
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyType,
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}
