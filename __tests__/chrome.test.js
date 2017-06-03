import { highlight, isChrome } from '../src/chrome';

describe('chrome', () => {

  test('highlight empty match', () => {
    expect(highlight()).toEqual(`<match></match>`);
  });

  test('highlight one match', () => {
    const text = 'the millenials are the laziest generation';
    const term = 'millenials';
    expect(highlight(text, term)).toEqual(
      `the <match>${term}</match> are the laziest generation`
    );
  });

  test('highlight multiple matches', () => {
    const text = 'foo bar baz bar biz bar boz';
    const term = 'bar';
    expect(highlight(text, term)).toEqual(
      `foo <match>${term}</match> baz <match>${term}</match> biz <match>${term}</match> boz`
    );
  });

  test('isChrome knows this is not Firefox', () => {
    expect(isChrome).toBe(true);
  });

});
