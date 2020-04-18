const translit = require('./helpers/string_formatter_helper').transliterate();

codeceptjs.locator.addFilter((providedLocator, locatorObj) => {
  const locatorType = [
    'button',
    'switcher',
    'checkbox',
    'tag',
    'clickable',
    'toast',
    'link',
    'fileupload',
    'option',
    'pseudolink',
    'checkable',
  ];

  if (locatorType.includes(Object.keys(providedLocator)[0])) {
    locatorObj.type = 'css';
    locatorObj.value = `.f-test-${Object.keys(providedLocator)[0]}-${translit(providedLocator[Object.keys(providedLocator)[0]])}`;
  } else if (providedLocator.select) {
    locatorObj.type = 'css';
    locatorObj.value = `.f-test-select-${translit(providedLocator.select)} select`;
  }
});