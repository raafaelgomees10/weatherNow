export const roundNumber = (number) => {
  const multipliedBy10 = number * 10;
  const firstDecimalNumber = multipliedBy10.toString()[1];

  if (firstDecimalNumber === '6') {
    return Math.ceil(number);
  } else {
    return Math.floor(number);
  }
};
