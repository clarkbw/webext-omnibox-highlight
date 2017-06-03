import { highlight } from '../src/firefox';

describe('firefox', () => {

  test('highlight is the same', () => {
    const text = 'the millenials are the laziest generation';
    const term = 'millenials';
    expect(highlight(text, term)).toBe(text);
  });

});
