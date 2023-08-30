module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@custom-hooks': './src/custom-hooks',
          '@assets': './src/assets',
          // '@env': 'node_modules/react-native-dotenv',
        },
      },
    ],
    'react-native-reanimated/plugin',
    // ... other configs, if any
  ],
};
