const fontSize = 16;

const htmlFontSize = 16;

const coef = fontSize / 16;

const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

export default pxToRem;
