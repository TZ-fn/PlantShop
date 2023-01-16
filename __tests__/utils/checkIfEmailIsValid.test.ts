import checkIfEmailIsValid from 'utils/checkIfEmailIsValid';

it('validates emails correctly', () => {
  expect(checkIfEmailIsValid('asdf')).toBe(false);

  expect(checkIfEmailIsValid('asdf@')).toBe(false);

  expect(checkIfEmailIsValid('asdf@asdf')).toBe(false);

  expect(checkIfEmailIsValid('asdf@.asd')).toBe(false);

  expect(checkIfEmailIsValid('asdf@')).toBe(false);

  expect(checkIfEmailIsValid('asdf@asdf.asdf')).toBe(true);
});
