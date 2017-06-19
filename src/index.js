import * as chrome from './chrome';
import * as firefox from './firefox';

export const match = chrome.isChrome ? chrome.match : firefox.match;
export const url = chrome.isChrome ? chrome.url : firefox.url;
export const dim = chrome.isChrome ? chrome.dim : firefox.url;
