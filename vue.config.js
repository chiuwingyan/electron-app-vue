const webpack = require('webpack');
module.exports = {
  chainWebpack: (config) => {
    config.target('electron-renderer');
  },
  configureWebpack: (config) => {
    const plugins = [];
    plugins.push(
      new webpack.DefinePlugin({
        'process.env.WEBPACK_DEV_SERVER_URL':
          process.env.WEBPACK_DEV_SERVER_URL || 'app://./index.html/',
      })
    );

    config.plugins = [...config.plugins, ...plugins];
  },
};
