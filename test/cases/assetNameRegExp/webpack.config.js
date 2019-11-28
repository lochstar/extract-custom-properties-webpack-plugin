import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ExtractCustomPropertiesPlugin from '../../../src'

module.exports = {
  entry: {
    'entry1': './entry1',
    'entry2': './entry2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtractCustomPropertiesPlugin({
      assetNameRegExp: /\entry1.css$/
    })
  ]
}
