// https://developer.chrome.com/extensions/omnibox#type-SuggestResult
export function match(text = '', match = '') {
  return text.replace(RegExp(match, 'g'), `<match>${match}</match>`);
}

export function url(text = '', match = '') {
  return text.replace(RegExp(match, 'g'), `<url>${match}</url>`);
}

export function dim(text = '', match = '') {
  return text.replace(RegExp(match, 'g'), `<dim>${match}</dim>`);
}

export const isChrome = navigator.userAgent.indexOf('Firefox') === -1;
