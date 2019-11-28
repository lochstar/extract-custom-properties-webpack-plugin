import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ExtractCustomPropertiesPlugin from '../../../src'

module.exports = {
  entry: './index',
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
    new ExtractCustomPropertiesPlugin()
  ]
}
