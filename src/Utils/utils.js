// random number where the provided min/max numbers are eligible for selection
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// create random key for lists
export const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};
