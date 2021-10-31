const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 開発用の設定
  mode: process.env.NODE_ENV,

  // エントリポイントとなるコード
  entry: './index.tsx',

  // バンドル後の js ファイルの出力先
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: 'dist',
    open: true,
    historyApiFallback: true,
  },

  // import 時に省略する拡張子
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
  },

  // ソースマップファイルの出力設定
  devtool: 'source-map',

  module: {
    rules: [
      // TypeScript ファイル (.ts/.tsx) を変換できるようにする
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },

  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
