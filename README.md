# Extract CSS Custom Properties Webpack Plugin

A Webpack plugin to extract CSS Custom Properties.

## What does the plugin do?

Search for CSS assets during the Webpack build and output Custom Properties data to a JSON file. Uses [postcss-extract-custom-properties](https://github.com/lochstar/postcss-extract-custom-properties).

## Installation:

```shell
$ npm install --save-dev extract-custom-properties-webpack-plugin
```

## Configuration:

The plugin can receive the following options (all optional):
* `filename`: The name of the file to output. Defaults to `variables.json`.
* `assetNameRegExp`: A regular expression that indicates the names of the assets that should have it's custom properties extracted. The regular expression provided is run against the filenames of the files exported by `MiniCssExtractPlugin` instances in your configuration, not the filenames of your source CSS files. Defaults to `/\.css(\?.*)?$/`.
* `canPrint`: A boolean indicating if the plugin can print messages to the console. Defaults to `true`.

## Example:

``` javascript
const MiniCssExtractPlugin require('mini-css-extract-plugin')
const ExtractCustomPropertiesPlugin = require('extract-custom-properties-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtractCustomPropertiesPlugin()
  ]
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
