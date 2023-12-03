const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: [
    'stylelint-config-recommended',
    // '@hh.ru/stylelint-config-hh' //много deprecated правил, при понижении stylelint до ^14, некоторые правила становятся неизвестными
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-use-logical-spec',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'color-hex-length': 'long',
    'liberty/use-logical-spec': true,
    'declaration-empty-line-before': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    'no-descending-specificity': null,
  },
  defaultSeverity: 'error',
  customSyntax: 'postcss-scss',
};
