import S from 'string';

export const decodeSpecialChars = encodedText =>
  S(encodedText).decodeHTMLEntities().s;
