jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

// defineTest(__dirname, 'typography-transform');

describe('typography-transform', () => {
  defineTest(
    __dirname,
    "typography-transform",
    null,
    "typescript/typography-transform",
    { parser: 'tsx' }
  )
})