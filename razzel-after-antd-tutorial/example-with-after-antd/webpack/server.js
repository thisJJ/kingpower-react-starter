
module.exports = (config, webpack) => {
  const appConfig = Object.assign({}, config);
  appConfig.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  }))
  return appConfig;
}