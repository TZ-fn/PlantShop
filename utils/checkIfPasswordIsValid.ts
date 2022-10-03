export default function checkIfPasswordIsValid(password: string): boolean {
  const passwordSigns = [...password];
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  if (passwordSigns.length < 8) {
    return false;
  }

  if (!password.match(lowerCaseLetters)) {
    return false;
  }

  if (!password.match(upperCaseLetters)) {
    return false;
  }

  if (!password.match(numbers)) {
    return false;
  }

  return true;
}
