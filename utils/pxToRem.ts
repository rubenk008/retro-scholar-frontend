const fontSize = 10;

const htmlFontSize = 10;

const coef = fontSize / 10;

const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

export default pxToRem;
