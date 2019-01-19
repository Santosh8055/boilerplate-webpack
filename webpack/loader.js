const stylus = {
  fileRegexp: /\.styl$/,
  loaderName: 'stylus-loader'
}
const sass = {
  fileRegexp: /\.sass$/,
  loaderName: 'sass-loader'
}

const less = {
  fileRegexp: /\.less$/,
  loaderName: 'less-loader'
}

const scss = {
  fileRegexp: /\.scss$/,
  loaderName: 'sass-loader'
}

// Set preprocessor here
const selectedPreprocessor = scss;

module.exports = {
  selectedPreprocessor
}