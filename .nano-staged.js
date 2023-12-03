export default {
  'src/**/*.{ts,tsx}': () => ['tsc -p tsconfig.json  --noEmit'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{scss,css}': ['stylelint --fix', 'prettier --write'],
  '!(*.{ts,scss,css})': ['prettier --write --ignore-unknown'],
};
