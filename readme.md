# Replace props codemod

This is a POC codemod to replace a react component with another new value.

### Useful information

The files of interest are

### `typography-transform.ts`

this is the actual code mod transformation code

### `__testfixtures__`

These are test files that show the expected `input` and `output` of the codemod

## How to use

1. Run `yarn install`
2. Rum `yarn jest` to test the codemod against the input/output test files in `__testfixtures__`