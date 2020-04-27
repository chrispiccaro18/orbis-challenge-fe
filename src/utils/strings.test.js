import { decodeSpecialChars } from './strings';

describe('string utils', () => {
  it('decodes escaped characters', () => {
    const encodedText = '&quot;  &amp; &lt; &gt; &copy;';
    expect(decodeSpecialChars(encodedText)).toBe('"  & < > ©');
  });
});
