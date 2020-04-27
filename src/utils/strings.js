import S from 'string';

export const decodeSpecialChars = encodedText =>
  S(encodedText).decodeHTMLEntities().s;

export const normalizeSymbolInput = input => 
  input.split(',').map(s => s.trim().toUpperCase());

// eslint-disable-next-line no-useless-escape
export const validSymbolRegex = /^[A-Z\.-]+$/;
