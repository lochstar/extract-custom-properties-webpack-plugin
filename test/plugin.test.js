import ExtractCustomPropertiesWebpackPlugin from '../src/'

describe('plugin test', () => {
  it('does not throw when called', () => {
    expect(() => {
      new ExtractCustomPropertiesWebpackPlugin()
    }).not.toThrow()
  })

  it('can override default parameters', () => {
    const assetNameRegExp = /\.input\.css$/
    const canPrint = false
    const plugin = new ExtractCustomPropertiesWebpackPlugin({
      assetNameRegExp,
      canPrint
    })
    expect(plugin.options.assetNameRegExp).toEqual(assetNameRegExp)
    expect(plugin.options.canPrint).toEqual(canPrint)
  });
});
