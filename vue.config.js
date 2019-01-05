// const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    runtimeCompiler: true,
   configureWebpack: {
       plugins: [
         new MonacoWebpackPlugin({
             languages: ['javascript', 'typescript', 'css', 'html', 'json']
         })
    ]
       
   }
}