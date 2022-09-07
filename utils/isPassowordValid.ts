export default function isPassowordValid(password: string): boolean {
  const passwordSigns = [...password];
  if (passwordSigns.length < 12) {
    return false;
  }
  return true;
}
