module.exports = {
  presets: [['@babel/preset-env',{
    "targets": {"chrome": "55"}, /* chrome 55 이상으로 지정 */
    "debug": true
  }], '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-class-properties',
  ],
};
