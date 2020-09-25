/*
 * @Author: your name
 * @Date: 2020-09-24 19:27:02
 * @LastEditTime: 2020-09-24 19:31:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {localIdentName: '[local]_[hash:base64:5]'}
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};