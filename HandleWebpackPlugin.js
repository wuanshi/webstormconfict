class MyExampleWebpackPlugin {
  static defaultOptions = {
    output: 'assets.md'
  }

  constructor(options) {
    this.options = Object.assign(MyExampleWebpackPlugin.defaultOptions, options);
  }
  apply(compiler) {
    const pluginName = MyExampleWebpackPlugin.name
    const { webpack } = compiler
    const { Compilation } = webpack
    const { RawSource } = webpack.sources

    // compiler.hooks.compilation.tap(pluginName, (compilation) => {
    //   compilation.hooks.optimize.tap(pluginName, () => {
    //     // console.log('optimize hook', optimize)
    //     console.log('source', compilation)
    //   })
    // })

    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap(pluginName, (chunks) => {
        chunks.forEach((chunk) => {
          chunk.files.forEach((file) => {
            console.log('file', file)
            const source = compilation.assets[file].source()
            // /console\.log\([^)]*\);?/g /console\.log\([^)]*\);?/g
            const newSource = source.replace(/console\.log\([^)]*\);?/g, '')
            compilation.assets[file] = {
              source: () => newSource,
              size: () => newSource.length
            }
          })
        })
      })
    })

    // compiler.hooks.environment.tap(pluginName, () => {
    //   console.log('environment hook', process.env)
    // })

    // compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
    //   compilation.hooks.processAssets.tap({
    //     name: pluginName,
    //     stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
    //   }, (assets) => {
    //     const content =
    //         `# In this build:\n\n` +
    //         Object.keys(assets)
    //           .map(assetName => `- ${assetName}`)
    //           .join('\n')
    //
    //     compilation.emitAsset(
    //         this.options.output,
    //         new RawSource(content)
    //     )
    //   })
    // })
  }
}

module.exports = {
  MyExampleWebpackPlugin
}