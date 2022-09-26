export default function checkIfEmailIsValid(email: string): boolean {
    return String(email)
    .toLowerCase()
    .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    ) ? true : false;
  }