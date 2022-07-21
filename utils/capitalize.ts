export default function capitalize([firstChar, ...rest]: string): string {
  return `${firstChar.toUpperCase()}${rest.join('')}`;
}
