describe('index', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('chrome should get chrome match', () => {
    // fake out the chrome module before we import
    const mockChrome = () => {};
    jest.mock('../src/chrome', () => {
      return {
        isChrome: true,
        match: mockChrome,
      };
    });
    const match = require('../src/index').match;
    expect(match).toBe(mockChrome);
  });

  test('firefox should get firefox match', () => {
    // fake out the chrome module before we import
    const mockChrome = () => {};
    jest.mock('../src/chrome', () => {
      return {
        isChrome: false,
        match: mockChrome,
      };
    });
    // now we should be given the firefox match module
    const firefox = require('../src/firefox').match;
    const match = require('../src/index').match;
    expect(match).toBe(firefox);
  });
});
