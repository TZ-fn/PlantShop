import comparePasswords from 'utils/comparePasswords';

it('validates emails correctly', () => {
  expect(comparePasswords('asdf', 'Asdf')).toBe(false);

  expect(comparePasswords('asdf', 'asdfa')).toBe(false);

  expect(comparePasswords('asdf1', 'asdf1')).toBe(true);

  expect(comparePasswords('Asdf!', 'Asdf!')).toBe(true);
});
