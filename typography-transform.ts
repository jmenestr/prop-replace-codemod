
const transformer = (file, api)  => {
  const j = api.jscodeshift;

  const root = j(file.source)
  root
  .findJSXElements('H1')
  .find(j.JSXAttribute, {
    name: {
      type: 'JSXIdentifier',
      name: 'size',
    },
    value: {
      type: 'StringLiteral',
    },
  })
  .find(j.StringLiteral)
  .replaceWith(() => {
    // const { node } = nodePath;
    // j.
    return j.stringLiteral('title')
  })

return root.toSource();
}

module.exports = transformer