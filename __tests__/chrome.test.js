import { match, url, dim, isChrome } from '../src/chrome';

describe('chrome', () => {
  describe('match', () => {
    test('match empty text', () => {
      expect(match()).toEqual(`<match></match>`);
    });

    test('match one term', () => {
      const text = 'the millenials are the laziest generation';
      const term = 'millenials';
      expect(match(text, term)).toEqual(
        `the <match>${term}</match> are the laziest generation`
      );
    });

    test('match multiple terms', () => {
      const text = 'foo bar baz bar biz bar boz';
      const term = 'bar';
      expect(match(text, term)).toEqual(
        `foo <match>${term}</match> baz <match>${term}</match> biz <match>${term}</match> boz`
      );
    });
  });

  describe('url', () => {
    test('url empty text', () => {
      expect(url()).toEqual(`<url></url>`);
    });

    test('url for one term', () => {
      const text =
        'checkout https://github.com/devtools-html/ for the best devtools';
      const term = 'https://github.com/devtools-html/';
      expect(url(text, term)).toEqual(
        `checkout <url>${term}</url> for the best devtools`
      );
    });

    test('url multiple terms', () => {
      const text =
        'tweet https://github.com/devtools-html/ for https://github.com/devtools-html/ and https://github.com/devtools-html/ its good';
      const term = 'https://github.com/devtools-html/';
      expect(url(text, term)).toEqual(
        `tweet <url>${term}</url> for <url>${term}</url> and <url>${term}</url> its good`
      );
    });
  });

  describe('dim', () => {
    test('dim empty text', () => {
      expect(dim()).toEqual(`<dim></dim>`);
    });

    test('dim one term', () => {
      const text = 'the millenials are the laziest generation';
      const term = 'millenials';
      expect(dim(text, term)).toEqual(
        `the <dim>${term}</dim> are the laziest generation`
      );
    });

    test('dim multiple terms', () => {
      const text = 'foo bar baz bar biz bar boz';
      const term = 'bar';
      expect(dim(text, term)).toEqual(
        `foo <dim>${term}</dim> baz <dim>${term}</dim> biz <dim>${term}</dim> boz`
      );
    });
  });

  test('isChrome knows this is not Firefox', () => {
    expect(isChrome).toBe(true);
  });
});
