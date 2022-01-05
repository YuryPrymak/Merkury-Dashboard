module.exports = {
  devServer: {
    port: 3000,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    }
  }
};
