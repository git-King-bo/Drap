const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-px2rem")({
  //           remUnit: 128
  //         })
  //       ]
  //     }
  //   }
  // },

  // rules: [
  //   {
  //     test: /\.css$/,
  //     use: [
  //       'style-loader',
  //       { loader: 'css-loader', options: { importLoaders: 1 } },
  //       'postcss-loader'
  //     ]
  //   }
  // ]


})
