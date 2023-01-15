import capitalize from 'utils/capitalize';

it('capitalises strings correctly', () => {
  expect(capitalize('asdf')).toBe('Asdf');

  expect(capitalize('~asdf')).toBe('~asdf');

  expect(capitalize('0asdf')).toBe('0asdf');

  expect(capitalize('Asdf')).toBe('Asdf');

  expect(capitalize('ASDF')).toBe('ASDF');
});
