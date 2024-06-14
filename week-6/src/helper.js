export const findFactorial = (num) => {
  if (num < 0) {
    return null;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * findFactorial(num - 1);
};
