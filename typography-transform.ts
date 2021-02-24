
// import { Transform } from 'jscodeshift';

const elements = [
  'H1',
  'H2'
]

const typeMappings = {
  'xxx-large': 'header',
  'xx-large': 'title-one',
}
const transformer = (file, api)  => {
  const j = api.jscodeshift;

  const root = j(file.source)
  // root.find(j.ImportDeclaration).filter(console.log)

  elements.forEach(element => {
    root
      .findJSXElements(element)
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
      .replaceWith((nodePath) => {
        const { node } = nodePath;

        const typographyDef = typeMappings[node.value]

        return j.stringLiteral(typographyDef)
      })

  })
return root.toSource({
  quote: 'double',
  parser: 'tsx'
});
}

module.exports = transformer