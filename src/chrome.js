// Currently Firefox auto-highlights but Chrome requires this XML syntax
export function highlight(text = '', match = '') {
  return text.replace(RegExp(match, 'g'), `<match>${match}</match>`);
}

export const isChrome = navigator.userAgent.indexOf('Firefox') === -1;
