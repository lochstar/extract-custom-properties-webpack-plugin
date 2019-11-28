const postcss = require('postcss')
const extractCustomProperties = require('postcss-extract-custom-properties')

class ExtractCustomPropertiesPlugin {
  constructor(options = {}) {
    this.options = {
      filename: options.filename || 'variables.json',
      assetNameRegExp: options.assetNameRegExp || /\.css(\?.*)?$/,
      canPrint: options.canPrint,
    }
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('ExtractCustomPropertiesPlugin', (compilation) => {
      return new Promise((resolve, reject) => {
        let css = ''
        for (let filename in compilation.assets) {
          if (filename.match(this.options.assetNameRegExp)) {
            css += compilation.assets[filename].source()
          }
        }

        postcss()
        .use(extractCustomProperties)
        .process(css, { from: undefined })
        .then((result) => {
          const data = result.contents
          const dataString = JSON.stringify(data, null, '  ')

          // Deal with warnings
          if (this.options.canPrint) {
            result.warnings().forEach((warn) => {
              console.warn(`${warn.text}: ${warn.word.toString()} (${warn.node.parent.selector})`)
            })
          }

          // Insert this list into the webpack build as a new file asset:
          compilation.assets[this.options.filename] = {
            source: () => {
              return dataString
            },
            size: () => {
              return dataString.length
            }
          }

          resolve()
        })
      })
    })
  }
}

module.exports = ExtractCustomPropertiesPlugin
