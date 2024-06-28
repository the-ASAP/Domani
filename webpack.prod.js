const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FontminPlugin = require('fontmin-webpack');
const glob = require('glob');
const common = require('./webpack.common.js');

// Получение css файлов в билде
const cssFiles = [
  ...glob.sync('./build/css/*.css').map((cssFile) => cssFile.replace('./build/', ''))
];

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    //Очистка билда при запуске команд
    new CleanWebpackPlugin(),
    // Сжатие изображений
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    // Сжатие шрифтов
    new FontminPlugin({
      autodetect: true, // automatically pull unicode characters from CSS
      glyphs: ['\uf0c8' /* extra glyphs to include */],
      // note: these settings are mutually exclusive and allowedFilesRegex has priority over skippedFilesRegex
      allowedFilesRegex: null, // RegExp to only target specific fonts by their names
      skippedFilesRegex: null // RegExp to skip specific fonts by their names
    })
  ]
});
