// ESLint のルールを定義
module.exports = {
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  // プラグインを有効化
  plugins: ['react-hooks'],
  rules: {
    // 正常に動かなさそうなフックを検知するルールを追加
    'react-hooks/exhaustive-deps': 'warn',
  },
};