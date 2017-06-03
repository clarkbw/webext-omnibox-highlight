describe('index', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  test('chrome should get chrome highlight', () => {
    // fake out the chrome module before we import
    const mockChrome = () => {};
    jest.mock('../src/chrome', () => {
      return {
        isChrome: true,
        highlight: mockChrome,
      }
    });
    const highlight = require('../src/index').default;
    expect(highlight).toBe(mockChrome);
  });

  test('firefox should get firefox highlight', () => {
    // fake out the chrome module before we import
    const mockChrome = () => {};
    jest.mock('../src/chrome', () => {
      return {
        isChrome: false,
        highlight: mockChrome,
      }
    });
    // now we should be given the firefox highlight module
    const firefox = require('../src/firefox').highlight;
    const highlight = require('../src/index').default;
    expect(highlight).toBe(firefox);
  });

});
