import { match, url, dim } from '../src/firefox';

describe('firefox', () => {
  test('match is the same', () => {
    const text = 'the millenials are the laziest generation';
    const term = 'millenials';
    expect(match(text, term)).toBe(text);
  });

  test('url is the same', () => {
    const text = 'the millenials are the laziest generation';
    const term = 'millenials';
    expect(url(text, term)).toBe(text);
  });

  test('dim is the same', () => {
    const text = 'the millenials are the laziest generation';
    const term = 'millenials';
    expect(dim(text, term)).toBe(text);
  });
});
