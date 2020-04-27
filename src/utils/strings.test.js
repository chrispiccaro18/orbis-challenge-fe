import { decodeSpecialChars, validSymbolRegex } from './strings';

describe('string utils', () => {
  it('decodes escaped characters', () => {
    const encodedText = '&quot;  &amp; &lt; &gt; &copy;';
    expect(decodeSpecialChars(encodedText)).toBe('"  & < > ©');
  });

  it('should only match valid symbol characters', () => {
    expect(validSymbolRegex.test('AAPL')).toBe(true);
    expect(validSymbolRegex.test('BRK.A')).toBe(true);
    expect(validSymbolRegex.test('TA-M')).toBe(true);
    expect(validSymbolRegex.test('%HEEL')).toBe(false);
    expect(validSymbolRegex.test('SH$P')).toBe(false);
    expect(validSymbolRegex.test('FOO#')).toBe(false);
  });
});
