## WebExtension Omnibox Highlight

A module to handle the differences between Chrome and Firefox implementations of the [omnibox WebExtension API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/omnibox) because using [omnibox.SuggestResult](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/omnibox/SuggestResult) doesn't handle matching for you correctly.

## Usage

There are 3 methods available.

* `match`
* `url`
* `dim`

Here's an example of usage:

```js
chrome.omnibox.onInputChanged.addListener(handleInputChanged);

function handleInputChanged(text, addSuggestions) {
  const headers = new Headers({ Accept: 'application/json' });
  const options = { method: 'GET', headers };
  const q = encodeURIComponent(text);
  const url = `http://mozilla.org/?q=${q}`;
  const request = new Request(url, options);

  fetch(request).then(handleResponse).then(addSuggestions);
}

function handleResponse(response) {
  return new Promise(resolve => {
    response.json().then(json => {
      return resolve(
        pages.map(json => {
          return {
            content: page.url,
            // match will highlight the matches found in this string
            description: match(page.title, json.query)
          };
        })
      );
    });
  });
}
```

## TODO

**NOTE**: that you should use a library like [xml-escape](https://www.npmjs.com/package/xml-escape) to handle the required escaping before passing into these functions.

## Publish

When publishing a new build, run the following:

```
yarn run build
yarn run prettier
npm version (major | minor | patch)
npm publish
```
