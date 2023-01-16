import checkIfPasswordIsValid from 'utils/checkIfPasswordIsValid';

it('validates emails correctly', () => {
  expect(checkIfPasswordIsValid('asdfasd')).toBe(false);

  expect(checkIfPasswordIsValid('asdfasdf')).toBe(false);

  expect(checkIfPasswordIsValid('asdf123')).toBe(false);

  expect(checkIfPasswordIsValid('asdf1234')).toBe(false);

  expect(checkIfPasswordIsValid('Asdf123')).toBe(false);

  expect(checkIfPasswordIsValid('Asdf1234')).toBe(true);
});
