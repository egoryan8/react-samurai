export const required = (value) => {
  if (value) return undefined;

  return 'Это поле обязательно к заполнению';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Максимальная длина: ${maxLength} симоволов`;
  return undefined;
};

export const myPostsValidator = (value) => {
  if (value && value.length > 30) return `Максимальная длина: 30 симоволов`;
  if (value) return undefined;
  return 'Это поле обязательно к заполнению';
};
