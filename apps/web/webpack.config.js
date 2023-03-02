/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: './src/index.jsx',
  mode: 'production',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 100,
          name: 'react'
        },
        material: {
          test: /[\\/]node_modules[\\/](@material-ui|@mui)[\\/]/,
          priority: 95,
          name: 'material'
        },
        emotion: {
          test: /[\\/]node_modules[\\/](@emotion|emotion)[\\/]/,
          priority: 95,
          name: 'emotion'
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 90,
          name: 'vendors'
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'ecmascript',
              jsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: require('path').join(__dirname, 'dist'),
  }
}

module.exports = config
